import { useState, useEffect } from 'react';
import Link from 'next/link'
import Layout from '../../../components/Hospital/Layout'

import { usePatientByAadharQuery, useCreatePatientAuthorizedHospitalMutation } from '../../../graphql/generated'

const Admit = () => {
    const [aadhar, setAadhar] = useState('');

    const [createPatientAuthorizedHospital] = useCreatePatientAuthorizedHospitalMutation();

    const { data, loading, error } = usePatientByAadharQuery({
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
                    className="flex gap-4 my-8 rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        id="aadhar"
                        name="aadhar"
                        className="py-2 px-4 placeholder-gray-400 text-gray-700 rounded-lg border shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Enter Aadhaar Number"
                        required
                    />
                    <button
                        type="submit"
                        className="py-2 px-4 w-36 font-semibold text-center text-white bg-gray-600 rounded-lg shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                    >
                        Submit
                    </button>
                </form>

                {data ? (
                    <>
                        <h2>Record found!</h2>

                        <div className="rounded-lg bg-gray-100/50 p-8">
                            <h3>{data.patient.name}</h3>
                            <p>{data.patient.aadhar}</p>
                            <p>{data.patient.phone}</p>
                        </div>

                        <button
                            className="py-2 px-4 w-48 font-semibold text-center text-white bg-gray-600 rounded-lg shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                            onClick={() => {
                                createPatientAuthorizedHospital({
                                    variables: { patientId: data.patient.id }
                                })
                            }}>
                            Admit patient?
                        </button>
                    </>
                ) : (
                    <>
                        <p>Record not found!</p>
                        <Link href="/patient/create">
                            <a
                                className="py-2 px-4 font-semibold text-center text-white bg-gray-600 rounded-lg shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                            >
                                Create new patient?
                            </a>
                        </Link>
                    </>
                )}
            </div>
        </Layout>
    )

};

export default Admit
