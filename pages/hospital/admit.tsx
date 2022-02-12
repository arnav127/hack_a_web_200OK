import { useState, useEffect } from 'react';
import Layout from '../../components/Hospital/Layout'

import { usePatientQuery } from '../../graphql/generated'

const Admit = () => {
    const [aadhar, setAadhar] = useState('');
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
        <Layout title="Admit Patient">
            <div className="container mx-auto">
                <form
                    className="flex w-96 max-w-[24rem] flex-col gap-4 rounded-lg bg-gray-100/50 p-8"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        id="aadhar"
                        name="aadhar"
                        className="rounded-lg border border-transparent py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Enter Aadhaar Number"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-gray-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                    >
                        Submit
                    </button>
                </form>
                <form
                    className="flex w-full flex-col gap-4 rounded-lg bg-gray-100/50 p-8"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        id="aathar"
                        name="aadhar"
                        className="rounded-lg border border-transparent py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Enter Aadhaar Number"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-gray-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    )
};

export default Admit
