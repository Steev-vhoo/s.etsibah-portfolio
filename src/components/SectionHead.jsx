import { Spark } from './Icons.jsx'

export default function SectionHead({ eyebrow, accent, rest, aside, center, light }) {
  return (
    <div className={`section-head ${center ? 'center' : ''} ${light ? 'light' : ''} reveal`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>
          <em>{accent}</em> {rest}
          <Spark />
        </h2>
      </div>
      {aside && <p className="section-aside">{aside}</p>}
    </div>
  )
}
