import Link from 'next/link'
import { useState } from 'react'
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
    const [openTab, setOpenTab] = useState(1)
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
                        <h2 className="text-sm font-bold uppercase">Personal Details</h2>
                        <p className="mt-2 text-xl font-bold">{data.patient.name}</p>
                        <p>Phone: {data.patient.phone}</p>
                    </div>


                    <div className="bg-white rounded-lg shadow-md">
                        <div className="w-full">
                            <ul className="flex justify-between items-center text-sm font-semibold uppercase">
                                <li className={`${openTab === 1 ? "border-gray-200" : "border-transparent"} border-b-4 flex-1 py-4 px-2 text-center cursor-pointer`} onClick={() => setOpenTab(1)}>Doctor Notes</li>
                                <li className={`${openTab === 2 ? "border-gray-200" : "border-transparent"} border-b-4 flex-1 py-4 px-2 text-center cursor-pointer`} onClick={() => setOpenTab(2)}>Test Results</li>
                                <li className={`${openTab === 3 ? "border-gray-200" : "border-transparent"} border-b-4 flex-1 py-4 px-2 text-center cursor-pointer`} onClick={() => setOpenTab(3)}>Patient Prescriptions</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className={`p-4 ${openTab === 1 ? "block" : "hidden"}`}>
                                <Doctor pid={pid} data={data} />
                            </div>
                            <div className={`p-4 ${openTab === 2 ? "block" : "hidden"}`}>
                                <PatientRecords pid={pid} data={data} />
                            </div>
                            <div className={`p-4 ${openTab === 3 ? "block" : "hidden"}`}>
                                <MedicineRecords pid={pid} data={data} />
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </Layout>
    )
}

export default PatientRecord