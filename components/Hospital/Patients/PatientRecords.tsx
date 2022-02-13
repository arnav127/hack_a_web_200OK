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
        <div className="overflow-x-auto">
            <table className="table-fixed my-4 w-full border-2 border-gray-100 border-collapse">
                <thead>
                    <tr className="border-b-2 border-gray-100">
                        <th className="p-4 text-center align-middle border-r-2 border-gray-100">
                            Test name
                        </th>
                        <th className="p-4 text-center align-middle border-r-2 border-gray-100">
                            Test Result
                        </th>
                        <th className="p-4 text-center align-middle border-r-2 border-gray-100">
                            Result Report
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.patient?.testresultSet && data.patient.testresultSet.map(result => {
                        return (
                            <tr key={result.id}>
                                <td className="p-4 text-center align-middle border-r-2 border-gray-100">
                                    {result.testName}
                                </td>
                                <td className="p-4 text-center align-middle border-r-2 border-gray-100">
                                    {result.testResult}
                                </td>
                                <td className="text-center">
                                    {
                                        result.media ? (
                                            <Link href={result.media}><a className="py-2 px-3 text-sm bg-gray-100 rounded" target="_blank">Download</a></Link>
                                        ) : "-"
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <form
                className="flex gap-4 m-4"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    id="testName"
                    name="testName"
                    className="py-2 px-4 placeholder-gray-400 text-gray-700 rounded-lg border border-transparent shadow-sm focus:border-transparent focus:ring-2 focus:outline-none focus:ring-sky-600"
                    placeholder="Test Name"
                    required
                />
                <input
                    type="text"
                    id="testResult"
                    name="testResult"
                    className="py-1 px-2 placeholder-gray-400 text-gray-700 rounded-lg border border-transparent shadow-sm focus:border-transparent focus:ring-2 focus:outline-none focus:ring-sky-600"
                    placeholder="Test Result"
                    required
                />
                <input className="form-control block w-full px-2 py-1 text-gray-700 bg-white bg-clip-padding m-0 " id="media" name="media" type="file" />
                <button
                    type="submit"
                    className="py-2 px-4 w-full font-semibold text-center text-white rounded-lg shadow-md transition duration-200 ease-in focus:ring-2 focus:ring-offset-2 focus:outline-none bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200"
                >
                    Upload
                </button>
            </form>
        </div >
    )
}

export default PatientRecords;
