import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <><Head>
          <title>Ali's Toyhouse</title>
          <link rel="icon" href="http://i122.photobucket.com/albums/o260/mhilka/minigifs/fetch_014-1.gif" />
      </Head><main>
              <Header />
              <h1>Welcome to the Realm of Eldoria</h1>
              <p className='block-text'>In the expanse of the multiverse lies Eldoria, a realm forged from the ethereal energies of creation and governed by the harmonious interplay of magic and nature. This universe is a tapestry woven with threads of ancient wisdom, fantastical landscapes, and enigmatic beings that defy imagination.</p>
              <h1>The Genesis</h1>
              <p className='block-text'>At the dawn of time, when the cosmic symphony resonated across the void, Eldoria emerged from the cosmic cauldron, shaped by the hands of mystical entities known as the Primarchs. These celestial architects infused the very essence of magic into the fabric of existence, birthing a world brimming with wonder and possibility.</p>
              <h1>The Splendor of Diversity</h1>
              <p className='block-text'>Eldoria is a mosaic of diverse lands, each bearing its unique essence and allure. From the emerald forests of Arvendel, where colossal trees whisper ancient secrets, to the crystalline spires of Celestia, where arcane scholars unravel the mysteries of the cosmos, the realm boasts a breathtaking array of landscapes and cultures.</p>
              <h1>Races and Civilizations</h1>
              <p className='block-text'>The denizens of Eldoria are as diverse as the lands they inhabit. Humans, elves, dwarves, and myriad other races thrive in harmony or clash in epic conflicts, each with their own rich histories, traditions, and aspirations. Kingdoms rise and fall, empires conquer and crumble, all leaving their indelible mark on the tapestry of time.</p>
              <h1>Magic and Mysteries</h1>
              <p className='block-text'>Magic courses through the veins of Eldoria, an omnipresent force woven into the very fabric of reality. Wizards harness the elemental forces, druids commune with nature spirits, and sorcerers delve into forbidden arts seeking power and forbidden knowledge. Arcane relics of immeasurable potency lie hidden in forgotten ruins, waiting for those brave enough to claim their might.</p>
              <h1>Challenges and Adventures</h1>
              <p className='block-text'>Yet, Eldoria is not without its perils. Dark forces stir in the shadows, threatening to plunge the realm into eternal chaos. Heroes rise from humble beginnings, embarking on epic quests to thwart ancient evils, discover lost treasures, and unravel the prophecies that foretell the fate of the universe.</p>
              <h1>Journey into Eldoria</h1>
              <p className='block-text'>Embark on a journey beyond imagination into Eldoria, where wonder and danger intertwine, where heroes are forged, and legends are written. Explore the depths of ancient ruins, soar atop majestic creatures, and forge alliances with mystical beings in this epic tapestry of adventure and magic.</p>
              <p className='block-text'>Dare to step into Eldoria, where your destiny awaits amidst the stars and wonders of an infinite universe.</p>
          </main><Footer /></>
  )
}
