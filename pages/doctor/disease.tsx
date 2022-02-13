import { useState, useEffect } from 'react';
import Link from 'next/link'
import Layout from '../../components/Hospital/Layout'

import { useDiseaseInfoQuery } from '../../graphql/generated'

const Admit = () => {
    const [aadhar, setAadhar] = useState(null);
    const [success, setSuccess] = useState(null);

    const { data, loading, error } = useDiseaseInfoQuery({
        variables: {
            name: aadhar
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
                        className="px-4 py-2 placeholder-gray-400 text-gray-700 rounded-lg border shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Disease"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 w-36 font-semibold text-center text-white bg-gray-600 rounded-lg shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                    >
                        Submit
                    </button>
                </form>

{data && <div>{JSON.stringify(data?.diseaseInfo)}</div>}
            </div>
        </Layout >
    )
};

export default Admit
