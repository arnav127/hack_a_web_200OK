import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    useAllDoctorsQuery,
    usePatientByIdQuery,
    useCreateDoctorPatientAssignedMutation
} from '../../../graphql/generated'

import Layout from '../../../components/Hospital/Layout'

const PatientRecord = () => {
    const router = useRouter()
    const { pid } = router.query

    const [createDoctorPatientAssigned] = useCreateDoctorPatientAssignedMutation();

    const { data, loading, error } = usePatientByIdQuery({
        variables: {
            id: pid
        }
    })

    const { data: doctors } = useAllDoctorsQuery();

    const handleDoctorSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        createDoctorPatientAssigned({
            variables: {
                doctorId: formData.get('doctor'),
                patientId: pid,
                status: 'ASSIGNED'
            }
        })
    }

    return (
        <Layout title="Patient Record">
            {(!loading && !error) && (
                <div>
                    <h2>Personal Details</h2>
                    <p>Name: {data.patient.name}</p>
                    <p>Phone: {data.patient.phone}</p>
                    <h2>Doctor Details</h2>
                    {
                        data?.patient?.doctorpatientassignedSet.length > 0 ? (
                            <>
                                <p>
                                    {data?.patient?.doctorpatientassignedSet.at(-1).doctor.name}
                                </p>
                                <p >
                                    {data?.patient?.doctorpatientassignedSet.at(-1).assignedAt.slice(0, 10)}
                                </p>
                                <p >
                                    {data?.patient?.doctorpatientassignedSet.at(-1).status}
                                </p>
                            </>

                        ) : (
                            <form
                                className="flex w-96 max-w-[24rem] flex-col gap-4 rounded-lg bg-sky-200/50 p-8"
                                onSubmit={handleDoctorSubmit}
                            >
                                <select name="doctor" id="doctor">
                                    <option value="">Select doctor</option>
                                    {doctors?.me?.hospital?.doctorSet.map(d => <option value={d.id} key={d.id}>{d.name}</option>)}
                                </select>
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-sky-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                                >
                                    Submit
                                </button>
                            </form>
                        )
                    }
                </div>

            )}
        </Layout>
    )
}

export default PatientRecord
