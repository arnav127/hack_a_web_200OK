import {
    useAllDoctorsQuery,
    useCreateDoctorPatientAssignedMutation
} from '../../../graphql/generated'

const Doctor = ({ pid, data }) => {
    const [createDoctorPatientAssigned] = useCreateDoctorPatientAssignedMutation();

    const { data: doctors } = useAllDoctorsQuery();

    const handleDoctorSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        createDoctorPatientAssigned({
            variables: {
                doctorId: formData.get('doctor'),
                patientId: pid,
                status: 'ASSIGNED'
            }
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
                        onSubmit={handleDoctorSubmit}
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
