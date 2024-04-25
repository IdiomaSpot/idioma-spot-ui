import './App.scss';
import { ScrollTopButton } from './components/ui';
import { Difference, MainBanner, Methodology, PromosSection } from './pages/Home';

function App() {
  return (
    <div className='App'>
      {/*<header className='App-header'> </header> */}
      <MainBanner></MainBanner>
      <Difference></Difference>
      <PromosSection></PromosSection>
      <Methodology></Methodology>
      <div>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at
            tellus at urna condimentum mattis pellentesque id nibh. Nisi est sit
            amet facilisis magna etiam tempor. Nulla aliquet enim tortor at
            auctor urna nunc. Ante metus dictum at tempor commodo ullamcorper a
            lacus. Netus et malesuada fames ac turpis egestas. Cursus euismod
            quis viverra nibh. Quam adipiscing vitae proin sagittis nisl rhoncus
            mattis. Orci phasellus egestas tellus rutrum tellus. Proin gravida
            hendrerit lectus a.
          </p>
          <p>
            Purus sit amet luctus venenatis lectus magna. Vitae tempus quam
            pellentesque nec nam aliquam. Vulputate enim nulla aliquet porttitor
            lacus luctus accumsan tortor. Curabitur vitae nunc sed velit
            dignissim sodales ut eu sem. Donec et odio pellentesque diam
            volutpat commodo sed egestas. Tellus orci ac auctor augue mauris
            augue. Erat imperdiet sed euismod nisi porta lorem. Duis ultricies
            lacus sed turpis tincidunt id aliquet. Ullamcorper velit sed
            ullamcorper morbi tincidunt ornare. Eget nunc lobortis mattis
            aliquam faucibus purus in. Adipiscing vitae proin sagittis nisl
            rhoncus mattis rhoncus urna neque.
          </p>
        </section>
        <section>
          <p>
            Nibh praesent tristique magna sit amet. Mattis enim ut tellus
            elementum sagittis vitae et. Ligula ullamcorper malesuada proin
            libero nunc consequat interdum varius sit. Elementum facilisis leo
            vel fringilla est ullamcorper eget nulla. Imperdiet massa tincidunt
            nunc pulvinar sapien et. Odio eu feugiat pretium nibh ipsum
            consequat. Neque ornare aenean euismod elementum nisi quis eleifend
            quam. Magna fringilla urna porttitor rhoncus dolor purus non.
            Fringilla est ullamcorper eget nulla facilisi etiam. Cursus metus
            aliquam eleifend mi. Ac turpis egestas sed tempus urna et pharetra
            pharetra massa.
          </p>
          <p>
            Nunc congue nisi vitae suscipit tellus mauris a. Faucibus et
            molestie ac feugiat sed lectus vestibulum. Dignissim diam quis enim
            lobortis scelerisque. Habitant morbi tristique senectus et netus.
            Enim ut sem viverra aliquet eget sit. At imperdiet dui accumsan sit
            amet nulla facilisi. Ornare massa eget egestas purus. Venenatis
            tellus in metus vulputate. Eget mi proin sed libero enim sed. Justo
            laoreet sit amet cursus sit amet. Enim neque volutpat ac tincidunt.
            Elementum nibh tellus molestie nunc non blandit massa. Purus in
            mollis nunc sed. Enim nulla aliquet porttitor lacus luctus accumsan
            tortor posuere ac. Bibendum est ultricies integer quis auctor elit
            sed vulputate. Massa ultricies mi quis hendrerit dolor magna eget
            est.
          </p>
        </section>
        <section>
          <p>
            Non arcu risus quis varius quam. Tristique magna sit amet purus
            gravida. Adipiscing enim eu turpis egestas pretium aenean pharetra
            magna. Nunc sed id semper risus in hendrerit gravida rutrum quisque.
            Tincidunt dui ut ornare lectus sit amet est placerat in. Mi quis
            hendrerit dolor magna eget est lorem. Bibendum neque egestas congue
            quisque egestas diam in. Gravida cum sociis natoque penatibus. Amet
            luctus venenatis lectus magna fringilla. Viverra mauris in aliquam
            sem fringilla ut. Purus sit amet volutpat consequat mauris nunc
            congue nisi. Amet dictum sit amet justo. Ipsum a arcu cursus vitae
            congue mauris rhoncus. Sit amet mauris commodo quis imperdiet. Vitae
            aliquet nec ullamcorper sit.
          </p>
          <p>
            Nisi porta lorem mollis aliquam ut porttitor leo a. Urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis purus
            sit amet volutpat. Venenatis a condimentum vitae sapien
            pellentesque. Tincidunt nunc pulvinar sapien et ligula ullamcorper
            malesuada. Eu turpis egestas pretium aenean pharetra magna ac
            placerat.
          </p>
        </section>
      </div>
      <ScrollTopButton></ScrollTopButton>
    </div>
  );
}

export default App;
