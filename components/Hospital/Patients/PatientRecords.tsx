import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../../lib/fileUpload';
import Link from 'next/link'

import {
    useCreateTestResultMutation,
    PatientByIdDocument
} from '../../../graphql/generated'


const PatientRecords = ({ pid, data }) => {
    const [createTestResultMutation] = useCreateTestResultMutation();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const file = formData.get('media');

        if (file.name) {
            const date = new Date();
            const fsFileName = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getTime()}-${file.name}`;
            const storageRef = ref(storage, fsFileName);

            const uploadTask = uploadBytesResumable(storageRef, file, {});

            uploadTask.on('state_changed',
                (snapshot) => {
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            break;
                    }
                },
                (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            break;
                        case 'storage/canceled':
                            break;
                        case 'storage/unknown':
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((res) => {
                        console.log("Hereeee", res)
                        createTestResultMutation({
                            variables: {
                                media: res,
                                patientId: pid,
                                testName: formData.get('testName'),
                                testResult: formData.get('testResult'),
                            },
                            refetchQueries: [PatientByIdDocument]
                        })
                    })
                });
        }
        else {
            createTestResultMutation({
                variables: {
                    patientId: pid,
                    testName: formData.get('testName'),
                    testResult: formData.get('testResult'),
                },
                refetchQueries: [PatientByIdDocument]
            })

        }

    }
    return (
        <div>
            <h2>Patient Records</h2>
            {data?.patient?.testresultSet && data.patient.testresultSet.map(result => {
                return (
                    <div>
                        {result.testName}
                        {result.testResult}
                        {result.media && (
                            <Link href={result.media}><a>Download</a></Link>
                        )}
                    </div>
                )
            })}
            <form
                className="flex gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    id="testName"
                    name="testName"
                    className="rounded-lg border border-transparent py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Test Name"
                    required
                />
                <input
                    type="text"
                    id="testResult"
                    name="testResult"
                    className="rounded-lg border border-transparent py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Test Result"
                    required
                />
                <input type="file" name="media" id='media' />
                <button
                    type="submit"
                    className="w-full rounded-lg bg-sky-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                >
                    Upload
                </button>
            </form>
        </div>
    )
}

export default PatientRecords;