import Page from '../components/Page'
import Maintenance from '../components/Maintenance'

export default function UnderConstruction() {
  return (
    <Page
      className="UnderConstruction"
      pageName="Under Construction"
      slug="/"
    >
      <Maintenance />
    </Page>
  )
}