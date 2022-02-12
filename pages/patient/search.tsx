import { useState, useEffect } from 'react';
import Link from 'next/link'
import Layout from '../../components/Hospital/Layout'

import { usePatientQuery, useCreatePatientAuthorizedHospitalMutation } from '../../graphql/generated'

const Admit = () => {
    const [aadhar, setAadhar] = useState('');

    const [createPatientAuthorizedHospital] = useCreatePatientAuthorizedHospitalMutation();

    const { data, loading, error } = usePatientQuery({
        variables: {
            aadhar: aadhar
        },
        skip: (!aadhar)
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        setAadhar(formData.get('aadhar'))
    }

    return (
        <Layout title="Search Patient" >
            <div className="container mx-auto">
                <form
                    className="my-8 flex gap-4 rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        id="aadhar"
                        name="aadhar"
                        className="rounded-lg border py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Enter Aadhaar Number"
                        required
                    />
                    <button
                        type="submit"
                        className="w-36 rounded-lg bg-gray-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                    >
                        Submit
                    </button>
                </form>

                {data && (
                    <>
                        <h2>Record found!</h2>

                        <div className="rounded-lg bg-gray-100/50 p-8">
                            <h3>{data.patient.name}</h3>
                            <p>{data.patient.aadhar}</p>
                            <p>{data.patient.phone}</p>
                        </div>

                        <button
                            className="w-36 rounded-lg bg-gray-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                            onClick={() => {
                                createPatientAuthorizedHospital({
                                    variables: { patientId: data.patient.id }
                                })
                            }}>
                            Admit patient?
                        </button>
                    </>
                )}
            </div>
        </Layout>
    )

};

export default Admit
