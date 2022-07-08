import * as Style from './GenrerOption-style'

interface GenrerOptionProp {
  children: React.ReactNode
}

const GenrerOption = () => {
  return (
    <Style.ContainerOption>
        <Style.OptionSelect>
            <Style.Options value="default">Gêneros</Style.Options>
            <Style.Options value=''>Ação</Style.Options>
            <Style.Options value=''>FPS</Style.Options>
            <Style.Options value=''>Aventura</Style.Options>
        </Style.OptionSelect>

        <Style.GenrerOption>
          
        </Style.GenrerOption>

    </Style.ContainerOption>
  )
}

export default GenrerOption