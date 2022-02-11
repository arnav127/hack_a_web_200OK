import Layout from '../../components/Hospital/Layout'

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex h-36 justify-between rounded-lg bg-green-100/50 p-4 text-center text-green-800 shadow-md">
          <h4 className="self-start font-semibold uppercase">Patients</h4>

          <p className="flex flex-col text-4xl">
            <span className="font-bold">420</span>
            <span>/</span>
            <span className="font-bold">6969</span>
          </p>
        </div>
        <div className="h-36 rounded-lg bg-gray-100/50 p-4 text-center shadow-md">
          Value
        </div>
        <div className="flex h-36 justify-between rounded-lg bg-blue-100/50 p-4 text-center text-blue-800 shadow-md">
          <h4 className="self-start font-semibold uppercase">Admit Patient</h4>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 self-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="col-span-2">
          <h2 className="font-semibold uppercase">Patient Records</h2>
        </div>
        <div>
          <h2 className="font-semibold uppercase">Resources</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
