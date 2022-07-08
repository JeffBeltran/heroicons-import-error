import { GlobeAltIcon } from '@heroicons/react/outline'
import { GlobeIcon } from '@heroicons/react/solid'

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>HERO ICONS DEBUG</h1>
      <p>Outline <GlobeAltIcon style={{width: '1rem', height: '1rem'}}/></p>
      <p>Solid <GlobeIcon style={{width: '1rem', height: '1rem'}}/></p>
    </div>
  );
}
