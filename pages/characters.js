import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    
      <><Head>
          <title>Ali's Toyhouse</title>
          <link rel="icon" href="http://i122.photobucket.com/albums/o260/mhilka/minigifs/fetch_014-1.gif" />
      </Head><main>
              <Header title="Welcome to my character page!" />
              <h1>Here a few a characters.....</h1>
          </main>
          
          <body>
        
        <div class="row"> 
        <div class="column">
            <img src="/elara.png" />
            <p className='para'>main character</p>
            <img src="/blacksmith.jpg" />
            <p className='para'>intended love interest of alara</p>
            <img src="/princess.png" />
            <p className='para'>pricess of eldoria</p>
            <img src="/raven.avif" />
            <p className='para'>rebellious mage</p>
            <img src="/cole.webp" />
            <p className='para'>Warrior</p>
            <img src="/pink.avif" />
            <p className='para'>an elven witch</p>
            <img src="/foxy.webp" />
            <p className='para'>humanoid fox, foxy</p>
        </div>
        <div class="column">
            <img src="/snow.avif" />
            <p className='para'>leader, father of elara</p>
            <img src="/knight.jpg" />
            <p className='para'>another warrior</p>
            <img src="/leader.jpeg" />
            <p className='para'>past leader of eldoria</p>
            <img src="/steel.webp" />
            <p className='para'>past warrior</p>
            <img src="/artemis.jpg" />
            <p className='para'>ranger warrior</p>
            <img src="https://i.pinimg.com/736x/e0/bd/37/e0bd378f55d8c541cb53689c830321e4.jpg" />
            <p className='para'>pricess from distant area</p>
        </div>  
        <div class="column">
            <img src="/hulk.jpg" />
            <p className='para'>orc</p>
            <img src="/orc.jpg" />
            <p className='para'>female orc</p>
            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/298201193/original/c3fa1863fd6b68fa78964cbfcfde1c21f3e888b1/design-a-fantasy-character-using-ai-generated-art.png" />
            <p className='para'>current villian</p>
            <img src="https://img.freepik.com/premium-photo/beautiful-woman-beautiful-queen-forest-ai-generated-art_634423-2000.jpg?w=2000" />
            <p className='para'>wife of leader, mother of elara</p>
            <img src="https://img.freepik.com/premium-photo/woman-with-gun-her-hand-is-holding-gun_973047-9028.jpg" />
            <p className='para'>sister of elara's mother</p>
            <img src="https://live.cdn.renderosity.com/gallery/items/3128953/images/2130627/b55c4c79d96e75d0cd09044cc59de1b6_original.jpg" />
            <p className='para'>mysterious mage</p>
            <img src="https://www.topai.art/images/characters/medium/character-0006.jpg" />
            <p className='para'>leader of distant clan</p>
        </div>
        <div class="column">
            <img src="https://img.freepik.com/premium-photo/game-is-game-armour_915367-13542.jpg" />
            <p className='para'>villian</p>
            <img src="https://cdna.artstation.com/p/assets/images/images/063/608/010/large/kyoungmin-lee-midjourney-test-pretty-shaman-girl-eye-contactall-bodyfull-body-29689ca0-9d7d-4bff-9cf4-5463cff8d184.jpg?1685950467&dl=1" />
            <p className='para'>shaman</p>
            <img src="https://i.pinimg.com/236x/f3/d6/95/f3d695da5fa15b6fab81261fe166f0ce.jpg" />
            <p className='para'>wife of other leader from distant clan</p>
            <img src="https://i.pinimg.com/736x/fd/8f/86/fd8f8689e964ce43d0072043fca090b2.jpg" />
            <p className='para'>warrior</p>
            <img src="https://i.pinimg.com/originals/01/bf/de/01bfded7f9d10753fe5f83f6e52c423e.jpg" />
            <p className='para'>rebellious leader</p>
            <img src="https://images.saymedia-content.com/.image/t_share/MTk2NjY0OTk4Nzc5NzU4Mzk4/stable-diffusion-prompts-for-portraits-of-fantasy-characters.jpg" />
            <p className='para'>humanoid creature</p>
        </div>
        </div>

        <p className='para'>all of these images are AI generated and I don't own any of these pictures of the fantasy world</p>
        </body>
          <Footer/></>
    
  )
}
