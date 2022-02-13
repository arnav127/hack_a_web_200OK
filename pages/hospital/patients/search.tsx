import { useState, useEffect } from 'react';
import Link from 'next/link'
import Layout from '../../../components/Hospital/Layout'

import { usePatientByAadharQuery, useCreatePatientAuthorizedHospitalMutation } from '../../../graphql/generated'

import { useAuth } from '../../../lib/auth'

const Admit = () => {
    const { user } = useAuth();
    const [aadhar, setAadhar] = useState(null);
    const [success, setSuccess] = useState(null);

    const [createPatientAuthorizedHospital] = useCreatePatientAuthorizedHospitalMutation();

    const { data, loading, error } = usePatientByAadharQuery({
        variables: {
            aadhar: aadhar
        },
        skip: (!aadhar),
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

                {aadhar && (
                    data?.patient ? (
                        <>
                            <h2>Record found!</h2>
                            <div className="rounded-lg bg-gray-100/50 p-8">
                                <h3>{data.patient.name}</h3>
                                <p>{data.patient.aadhar}</p>
                                <p>{data.patient.phone}</p>
                            </div>

                            {data?.patient?.patientauthorizedhospitalSet.length > 0 ? (
                                <>
                                    {console.log(user)}
                                    {data?.patient?.patientauthorizedhospitalSet.at(-1).hospitalId.id === user?.hospital?.id ?
                                        (
                                            <Link
                                                href={`/hospital/patients/${data?.patient?.id}`}
                                            >
                                                <a className="py-2 px-4 w-48 font-semibold text-center text-white bg-gray-600 rounded-lg shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200" >

                                                    View details
                                                </a>
                                            </Link>
                                        )
                                        : (
                                            <p>Patient admitted in {data?.patient?.patientauthorizedhospitalSet.at(-1).hospitalId.name}</p>
                                        )
                                    }</>
                            )
                                : (
                                    <>
                                        <button
                                            className="py-2 px-4 w-48 font-semibold text-center text-white bg-gray-600 rounded-lg shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                                            onClick={() => {
                                                const { error, loading } = createPatientAuthorizedHospital({
                                                    variables: { patientId: data.patient.id }
                                                })
                                                if (!error && !loading) {
                                                    setSuccess("Patient admitted successfully");
                                                    return;
                                                }
                                                setSuccess("Error")
                                            }}>
                                            Admit patient?
                                        </button>
                                        {success && <p className="mt-2">{success}</p>}
                                    </>
                                )
                            }

                        </>
                    ) : (
                        <>
                            <p className="my-2">Record not found!</p>
                            <Link href="/hospital/patients/create">
                                <a
                                    className="py-2 px-4 font-semibold text-center text-white bg-gray-600 rounded-lg shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                                >
                                    Create new patient?
                                </a>
                            </Link>
                        </>
                    )
                )}
            </div>
        </Layout >
    )
};

export default Admit
