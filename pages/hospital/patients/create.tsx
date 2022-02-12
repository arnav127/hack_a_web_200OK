import { useState } from 'react'
import Layout from '../../../components/Hospital/Layout'

import { usePatientByAadharQuery, useCreatePatientMutation, useCreatePatientAuthorizedHospitalMutation } from '../../../graphql/generated'

const Admit = () => {
    const [success, setSuccess] = useState(false)
    const [createPatient] = useCreatePatientMutation();
    const [createPatientAuthorizedHospital] = useCreatePatientAuthorizedHospitalMutation();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const { data, loading, error } = await createPatient({
            variables: {
                name: formData.get('name'),
                phone: formData.get('phone'),
                aadhar: formData.get('aadhar'),
            },

        });

        if (!loading && !error) {
            createPatientAuthorizedHospital({
                variables: { patientId: data?.createPatient?.patient?.id }
            })
        }

        if (!!data) setSuccess(true);
    }

    return (
        <Layout title="Admit New Patient" >
            <div className="container mx-auto">
                <form
                    className="flex w-96 max-w-[24rem] flex-col gap-4 rounded-lg bg-gray-100/50 p-8"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="rounded-lg border border-transparent py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Enter patient name"
                        required
                    />
                    <input
                        type="text"
                        id="aadhar"
                        name="aadhar"
                        className="rounded-lg border border-transparent py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Enter Aadhaar Number"
                        required
                    />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="rounded-lg border border-transparent py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Enter patient phone number"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-gray-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                    >
                        Submit
                    </button>
                </form>
                {success && "Patient created and admitted successfully!"}
            </div>
        </Layout >
    )

};

export default Admit
