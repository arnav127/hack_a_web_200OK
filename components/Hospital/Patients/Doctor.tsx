import {
    useAllDoctorsQuery,
    PatientByIdDocument,
    useCreateDoctorPatientAssignedMutation,
    useUpdateDoctorPatientAssignedMutation
} from '../../../graphql/generated'

import { useAuth } from '../../../lib/auth'

const Doctor = ({ pid, data }) => {
    const { user } = useAuth();
    const [createDoctorPatientAssigned] = useCreateDoctorPatientAssignedMutation();
    const [updateDoctorPatientAssigned] = useUpdateDoctorPatientAssignedMutation();

    const { data: doctors } = useAllDoctorsQuery();

    const handleDoctorStatusUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        updateDoctorPatientAssigned({
            variables: {
                id: data?.patient?.doctorpatientassignedSet.at(-1).id,
                newStatus: formData.get('newStatus')
            },
            refetchQueries: [PatientByIdDocument]
        })
    }

    const handleAssignDoctor = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        createDoctorPatientAssigned({
            variables: {
                doctorId: formData.get('doctor'),
                patientId: pid,
                status: 'ASSIGNED'
            },
            refetchQueries: [PatientByIdDocument]
        })
    }

    return (
        <div>
            <h2>Doctor Details</h2>
            {
                data?.patient?.doctorpatientassignedSet.length > 0 ? (
                    <>
                        <p>
                            Doctor name:  {data?.patient?.doctorpatientassignedSet.at(-1).doctor.name}
                        </p>
                        <p>
                            Assigned on: {data?.patient?.doctorpatientassignedSet.at(-1).assignedAt.slice(0, 10)}
                        </p>
                        <p>
                            Status: {data?.patient?.doctorpatientassignedSet.at(-1).status}
                            {user?.isDoctor && (
                                <form
                                    className="flex gap-4"
                                    onSubmit={handleDoctorStatusUpdate}
                                >
                                    Update status?
                                    <select name="newStatus" id="newStatus" required>
                                        <option value="">Select option</option>
                                        <option value="CURED">CURED</option>
                                        <option value="ASSIGNED">ASSIGNED</option>
                                        <option value="REFERRED">REFERRED</option>
                                        <option value="WAITING">WAITING</option>
                                    </select>
                                    <button
                                        type="submit"
                                        className="w-full rounded-lg bg-sky-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                                    >
                                        Submit
                                    </button>
                                </form>

                            )}
                        </p>

                        <div>
                            {data?.patient?.doctornotesSet.length > 0 && (
                                data.patient.doctornotesSet.map(note => {
                                    return (
                                        <>
                                            <p>Diagnosis: {note.diagnosis}</p>
                                            <p>Notes: {note.notes}</p>
                                        </>
                                    )
                                })
                            )}
                        </div>
                    </>
                ) : (
                    <form
                        className="flex w-96 max-w-[24rem] flex-col gap-4 rounded-lg bg-sky-200/50 p-8"
                        onSubmit={handleAssignDoctor}
                    >
                        <select name="doctor" id="doctor">
                            <option value="">Select doctor</option>
                            {doctors?.me?.hospital?.doctorSet.map(d => <option value={d.id} key={d.id}>{d.name}</option>)}
                        </select>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-sky-600 py-2 px-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200"
                        >
                            Submit
                        </button>
                    </form>
                )
            }
        </div>

    )
}

export default Doctor;
