import ReturnPage from 'components/ReturnPage'
import * as Style from './style'
import { useNavigate } from 'react-router-dom'
import ContainerForm from 'components/ContainerForm';
import React, { useState } from 'react';
import { CreateGenrerType } from 'types/interfaces';
import { Genrers } from 'Service/genrerService';
import swal from "sweetalert";

const CrudGenrer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<CreateGenrerType>({
    name: '',
  });

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

            <Style.Btn type='submit'>Adicionar</Style.Btn>
          </Style.Form>
        </ContainerForm>

        <ContainerForm>
          <Style.DescriptionForm>Editar ou excluir gêneros</Style.DescriptionForm>

          <Style.Form>

            <Style.ContainerOption>
              <Style.OptionSelect>
                <Style.Options value='default'>
                  Gênero
                </Style.Options>
                <Style.Options value=''>Teste</Style.Options>
              </Style.OptionSelect>
            </Style.ContainerOption>

            <Style.Input 
              
            />
          </Style.Form>
        </ContainerForm>
      </Style.DivContainers>
    </Style.Page>
  )
}

export default CrudGenrer