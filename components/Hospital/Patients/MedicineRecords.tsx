import { useAuth } from '../../../lib/auth'

import { useCreateMedicineRecordMutation, PatientByIdDocument } from '../../../graphql/generated'

const MedicineRecords = ({ pid, data }) => {
    const { user } = useAuth()
    const [createMedicineRecord] = useCreateMedicineRecordMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)

        createMedicineRecord({
            variables: {
                patientId: pid,
                prescription: formData.get('prescription'),
            },
            refetchQueries: [PatientByIdDocument]
        })
    }
    return (
        <div className="p-4">
            {data?.patient?.medicinerecordSet.length > 0 &&
                <ul className="list-disc">
                    {data.patient.medicinerecordSet.map(record => {
                        return (
                            <li key={record.id}>
                                {record.prescription}
                            </li>
                        )
                    })}
                </ul>
            }
            {user?.isDoctor && (<form
                className="flex gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    id="prescription"
                    name="prescription"
                    className="py-2 px-4 placeholder-gray-400 text-gray-700 rounded-lg border border-transparent shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Prescription Name"
                    required
                />
                <button
                    type="submit"
                    className="py-2 px-4 font-semibold text-center text-white rounded-lg shadow-md transition duration-200 ease-in bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                >
                    Create prescription
                </button>
            </form>)}
        </div>
    )
}

export default MedicineRecords
