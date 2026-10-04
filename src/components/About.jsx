import CardSkill from './CardSkill'

function About() {
    return <>
        <div>
            <h2>Sobre mi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae orci ut justo pharetra malesuada. 
                Donec et sem convallis, rhoncus justo sit amet, fermentum tellus. Ut consequat vel ante sit amet rhoncus. 
                Ut purus diam, imperdiet ut vehicula nec, 
                cursus quis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus magna.
            </p>
            <h2>Mis habilidades</h2>
            <div className="skill-container">
                <CardSkill />
                <CardSkill />
                <CardSkill />
                <CardSkill />
            </div>
        </div>
    </>
}

export default About