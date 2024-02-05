
import FeaturesAnim from './(ui)/FeaturesAnim'
import FeaturesMain from './(ui)/FeaturesMain'

export default function Features() {
  return (
    <section
      id="Features"
      className="px-3 md:mt-8 mx-auto max-w-7xl grid md:grid-cols-3 lg:grid-cols-2 min-h-72 "
    >
      <FeaturesAnim />
      <FeaturesMain />
    </section>
  )
}
