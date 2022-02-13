import Layout from '../../components/Hospital/Layout'

import { useAllHospitalsQuery } from '../../graphql/generated'

const Nearby = () => {
  const { data, loading, error } = useAllHospitalsQuery()
  return (
    <Layout title="Nearby Hospitals">
      <div className="flex flex-wrap gap-8">
        {data?.allHospitals.length > 0 &&
          data?.allHospitals.map((h) => {
            return (
              <div className="flex flex-col rounded-lg bg-white p-4">
                {console.log(h)}
                <h3 className="text-xl font-semibold">{h.name}</h3>
                <p>
                  {h.address}
                  <br />
                  {h.phone}
                </p>
                <h4>Resources</h4>
                <div className="mt-1 flex justify-between gap-2">
                  <div className="flex flex-col items-center justify-between p-2">
                    <p>Ventilators</p>
                    <p className="text-xl font-semibold">
                      <span>{h?.hospitalresource?.ventilatorAvailable}</span>/
                      <span>{h?.hospitalresource?.ventilatorCapacity}</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-between p-2">
                    <p>ICUs</p>
                    <p className="text-xl font-semibold">
                      <span>{h?.hospitalresource?.icuAvailable}</span>/
                      <span>{h?.hospitalresource?.icuCapacity}</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-between p-2">
                    <p>Beds</p>
                    <p className="text-xl font-semibold">
                      <span>{h?.hospitalresource?.bedAvailable}</span>/
                      <span>{h?.hospitalresource?.bedCapacity}</span>
                    </p>
                  </div>
                </div>
                <h4>Services</h4>
                <ul className="mt-1 flex gap-1">
                  {h?.hospitalresource?.bloodTest && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      bloodTest
                    </li>
                  )}
                  {h?.hospitalresource?.urineTest && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      urineTest
                    </li>
                  )}
                  {h?.hospitalresource?.xray && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      xray
                    </li>
                  )}
                  {h?.hospitalresource?.ultrasound && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      ultrasound
                    </li>
                  )}
                  {h?.hospitalresource?.mri && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      mri
                    </li>
                  )}
                  {h?.hospitalresource?.ecg && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      ecg
                    </li>
                  )}
                  {h?.hospitalresource?.eeg && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      eeg
                    </li>
                  )}
                  {h?.hospitalresource?.ekg && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      ekg
                    </li>
                  )}
                  {h?.hospitalresource?.catscan && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      catscan
                    </li>
                  )}
                  {h?.hospitalresource?.mammogram && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      mammogram
                    </li>
                  )}
                  {h?.hospitalresource?.colonoscopy && (
                    <li className="bg-gray-100 px-2 py-1 text-xs font-semibold uppercase">
                      colonoscopy
                    </li>
                  )}
                </ul>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export default Nearby
