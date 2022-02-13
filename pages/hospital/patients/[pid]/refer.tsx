import { useState } from 'react'
import Layout from '../../../../components/Hospital/Layout'
import { useRouter } from 'next/router'

import { useAuth } from '../../../../lib/auth'

import {
    useAllHospitalsQuery,
    usePatientByIdQuery,
    useCreateReferredPatientMutation
} from '../../../../graphql/generated'

const Refer = () => {
    const [success, setSuccess] = useState(null)
    const [createReferredPatientMutation] = useCreateReferredPatientMutation();
    const router = useRouter();
    const { pid } = router.query
    const { user } = useAuth();


    const { data, loading, error } = usePatientByIdQuery({
        variables: {
            id: pid
        }
    })

    const { data: allHospitals } = useAllHospitalsQuery()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const { data: ok } = createReferredPatientMutation({
            variables: {
                patient: pid,
                hospitalReferred: formData.get('hospitalReferred'),
                reason: formData.get('reason')
            }
        })

        if (!!ok) setSuccess(true);
    }

    return (
        <Layout title="Refer patient">
            {(!loading && !error) && (
                <div className="space-y-8">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-sm font-bold uppercase">Personal Details</h2>
                        <p className="mt-2 text-xl font-bold">{data?.patient.name}</p>
                        <p>Phone: {data?.patient.phone}</p>
                    </div>

                    <form
                        className="flex w-96 max-w-[24rem] flex-col gap-4 rounded-lg bg-gray-100/50 p-8"
                        onSubmit={handleSubmit}
                    >
                        <select name="hospitalReferred" id="hospitalReferred">
                            <option value="">Select hospital</option>
                            {allHospitals?.allHospitals.length > 0 &&
                                allHospitals?.allHospitals.map((h) => {
                                    return (<option key={h.id} value={h.id}>{h.name}</option>)
                                })}
                        </select>
                        <input
                            type="text"
                            id="reason"
                            name="reason"
                            className="py-2 px-4 placeholder-gray-400 text-gray-700 rounded-lg border border-transparent shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                            placeholder="Reason"
                            required
                        />
                        <button
                            type="submit"
                            className="py-2 px-4 w-full font-semibold text-center text-white bg-gray-600 rounded-lg shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                        >
                            Submit
                        </button>
                    </form>
                    {success && "Patient created and admitted successfully!"}
                </div>
            )
            }
        </Layout >
    )

};

export default Refer
