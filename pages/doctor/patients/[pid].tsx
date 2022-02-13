import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    useAllDoctorsQuery,
    usePatientByIdQuery,
    useCreateDoctorPatientAssignedMutation
} from '../../../graphql/generated'

import Layout from '../../../components/Doctor/Layout'
import Doctor from '../../../components/Hospital/Patients/Doctor'
import PatientRecords from '../../../components/Hospital/Patients/PatientRecords'
import MedicineRecords from '../../../components/Hospital/Patients/MedicineRecords'

const PatientRecord = () => {
    const router = useRouter()
    const { pid } = router.query


    const { data, loading, error } = usePatientByIdQuery({
        variables: {
            id: pid
        }
    })


    return (
        <Layout title="Patient Record">
            {(!loading && !error) && (
                <div className="space-y-8">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="mb-6 text-xl font-bold uppercase">Personal Details</h2>
                        <p>Name: {data.patient.name}</p>
                        <p>Phone: {data.patient.phone}</p>
                    </div>


                    <Doctor pid={pid} data={data} />
                    <PatientRecords pid={pid} data={data} />
                    <MedicineRecords pid={pid} data={data} />
                </div>

            )}
        </Layout>
    )
}

export default PatientRecord
