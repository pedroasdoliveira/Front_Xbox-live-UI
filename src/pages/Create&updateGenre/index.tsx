import ReturnPage from 'components/ReturnPage'
import * as Style from './style'
import { useNavigate } from 'react-router-dom'
import ContainerForm from 'components/ContainerForm';
import React, { useEffect, useState } from 'react';
import { CreateGenrerType, GenrerTypes } from 'types/interfaces';
import { Genrers } from 'Service/genrerService';
import swal from "sweetalert";

const CrudGenrer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<CreateGenrerType>({
    name: '',
  });
  const [allName, setAllName] = useState<GenrerTypes[]>([]);
  const [genrerId, setGenrerId] = useState<string>('');
  
  useEffect(() => {
    fecthAllGenrers();
  }, [])

  const fecthAllGenrers = async () => {
    const allGenrers = await Genrers.AllGenrers();
    
    if (allGenrers) {
      setAllName(allGenrers.data)
    }
  }

  const fechtGenrerId = async (id: string) => {
    const genrer = await Genrers.GetGenrerById(id)

    if (genrer) {
      setName({
        name: genrer.data.name
      })
    }
  }

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((name: CreateGenrerType) => ({
      ...name,
      [e.target.name]: e.target.value
    }))
  }

  const createGenrer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadCreate = await Genrers.CreateGenrer(name);

    if (payloadCreate) {
      swal({
        title: "Gênero cadastrado com sucesso!",
        icon: "success",
        timer: 6000,
      });
    }
    else {
      swal({
        title: "Error ao cadastrar gênero!",
        icon: "error",
        timer: 6000,
      });
    }
  }

  const editGenrer = async () => {
    const payloadEdit = await Genrers.EditGenrer(genrerId, name)

    if (payloadEdit) {
      swal({
        title: "Gênero editado com sucesso!",
        icon: "success",
        timer: 6000,
      });
      fecthAllGenrers();
    }
    else {
      swal({
        title: "Error ao editar gênero!",
        icon: "error",
        timer: 6000,
      });
    }
  }

  const deleteGenrer = async () => {
    const payloadDelete = await Genrers.DeleteGenrer(genrerId)

    if (payloadDelete) {
      swal({
        title: "Gênero deletado com sucesso!",
        icon: "success",
        timer: 6000,
      });
      fecthAllGenrers();
    }
    else {
      swal({
        title: "Error ao deletar gênero!",
        icon: "error",
        timer: 6000,
      });
    }
  }

  const takeGenrer = (e: React.ChangeEvent<any>) => {
    setGenrerId(e.target.value)
    fechtGenrerId(e.target.value)
  }

  return (
    <Style.Page>
      <ReturnPage Route={() => navigate(-1)} />

      <Style.DivContainers>
        <ContainerForm>
          <Style.DescriptionForm>Adicionar gêneros de jogos</Style.DescriptionForm>

          <Style.Form onSubmit={createGenrer}>
            <Style.Input 
              type='text'
              placeholder=' Gênero'
              name='name'
              id='name'
              onChange={handleValue}
              required
            />

            <Style.BtnCreate type='submit'>Adicionar</Style.BtnCreate>
          </Style.Form>
        </ContainerForm>

        <ContainerForm>
          <Style.DescriptionForm>Editar ou excluir gêneros</Style.DescriptionForm>

          <Style.Form>

            <Style.ContainerOption>
              <Style.OptionSelect onChange={takeGenrer} id='gender'>
                <Style.Options value='default'>
                  Gênero
                </Style.Options>
                {allName.map((genrer) => (
                  <Style.Options key={genrer.id} value={genrer.id}>{genrer.name}</Style.Options>
                ))}
              </Style.OptionSelect>
            </Style.ContainerOption>

            <Style.Input 
              type='text'
              placeholder=' Editar ou deletar Gênero'
              name='name'
              id='name'
              value={name.name}
              onChange={(e: React.ChangeEvent<any>) => setName({name: e.target.value})}
              required
            />

            <Style.BtnsRequests>
              <Style.BtnEdit type='button' onClick={editGenrer}>Editar</Style.BtnEdit>
              <Style.BtnDelete type='button' onClick={deleteGenrer}>Deletar</Style.BtnDelete>
            </Style.BtnsRequests>
          </Style.Form>
        </ContainerForm>
      </Style.DivContainers>
    </Style.Page>
  )
}

export default CrudGenrer

{/* <script type="text/javascript">
            function update() {
                var select = document.getElementById('gender');
                var option = select.options[select.selectedIndex];

                document.getElementById('value').value = option.value;
                document.getElementById('text').value = option.text;
            }

            update();
    </script>
   */}