import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css"

const Home = () => {
    return (
        <div className="page">
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">
                    <div className="topDiv">
                        <div>
                    <h2 className="myName">Łukasz Spychała</h2>
                    <h1 className="softDev">Software Developer</h1>
                    </div>
                    <p>asdasdasdasdasdasd</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies nisl nec convallis dapibus. Praesent et tellus ut mi finibus placerat. Etiam sodales maximus ante, ac viverra libero porta ac. Proin accumsan posuere lobortis. Pellentesque lacinia rutrum condimentum. Phasellus vitae tincidunt justo, non faucibus nibh. Morbi scelerisque felis consectetur, interdum quam ut, pretium sapien.
                       Suspendisse at ultricies augue. Sed varius lacus sit amet tortor auctor viverra. Nunc at sagittis dui, a tempus ante. Integer in sagittis lacus, sit amet egestas arcu. Vivamus in eros odio. Sed scelerisque urna ut pharetra varius. In non pellentesque diam, ut consequat augue. Donec ultrices congue augue, et consectetur urna fermentum sed. Duis sollicitudin egestas augue sed dapibus. Mauris eleifend massa leo, sit amet mattis ex tristique sed. In feugiat gravida ipsum. Quisque in fermentum erat. Nulla porttitor felis nec neque interdum, at ultrices sem venenatis. Donec ut tellus interdum, luctus massa vel, rutrum mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies nisl nec convallis dapibus. Praesent et tellus ut mi finibus placerat. Etiam sodales maximus ante, ac viverra libero porta ac. Proin accumsan posuere lobortis. Pellentesque lacinia rutrum condimentum. Phasellus vitae tincidunt justo, non faucibus nibh. Morbi scelerisque felis consectetur, interdum quam ut, pretium sapien.
                       Suspendisse at ultricies augue. Sed varius lacus sit amet tortor auctor viverra. Nunc at sagittis dui, a tempus ante. Integer in sagittis lacus, sit amet egestas arcu. Vivamus in eros odio. Sed scelerisque urna ut pharetra varius. In non pellentesque diam, ut consequat augue. Donec ultrices congue augue, et consectetur urna fermentum sed. Duis sollicitudin egestas augue sed dapibus. Mauris eleifend massa leo, sit amet mattis ex tristique sed. In feugiat gravida ipsum. Quisque in fermentum erat. Nulla porttitor felis nec neque interdum, at ultrices sem venenatis. Donec ut tellus interdum, luctus massa vel, rutrum mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                </div>
            </div>
            <Footer />
        </div>
            )
}

export default Home;