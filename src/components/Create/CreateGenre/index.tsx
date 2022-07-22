import * as Style from './style'

interface Prop {
    Route: () => void
}

const CreateGenrerAdmin = ({Route}: Prop) => {
  return (
    <Style.SectionItemsDiv>
        <Style.SepareItems>
            <Style.CreateGenrerIcon onClick={Route} />
        </Style.SepareItems>
    </Style.SectionItemsDiv>
  )
}

export default CreateGenrerAdmin