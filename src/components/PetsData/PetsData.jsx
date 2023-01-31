import {
  PetsCard,
  PetPhoto,
  DeleteBtn,
  PetsInfoItem,
  PetsInfoSpan,
  PetsList,
} from "./PetsData.styled";
const PetsData = ({ user }) => {
  const pets = user.myPets;

  return (
    <PetsList>
      {pets.map((pet) => {
        return (
          <>
            <PetsCard id={pet._id}>
              <PetPhoto
                src="https://www.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7"
                alt={pet.name}
              ></PetPhoto>
              <ul>
                <PetsInfoItem>
                  <PetsInfoSpan>Name: </PetsInfoSpan>
                  {pet.name}
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Date of birth: </PetsInfoSpan>22.04.2018
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Breed: </PetsInfoSpan>Persian cat
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Comments: </PetsInfoSpan>Lorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem
                  ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                  consectetur Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Eaque eius suscipit explicabo hic dolore
                  mollitia, modi ipsum inventore, reiciendis amet odio voluptas
                  itaque laudantium blanditiis illo nobis consequatur quae
                  perferendis.
                </PetsInfoItem>
              </ul>
              <DeleteBtn type="button">-</DeleteBtn>
            </PetsCard>
            {/* ssdsd */}
            <PetsCard id={pet._id}>
              <PetPhoto
                src="https://www.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7"
                alt={pet.name}
              ></PetPhoto>
              <ul>
                <PetsInfoItem>
                  <PetsInfoSpan>Name: </PetsInfoSpan>
                  {pet.name}
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Date of birth: </PetsInfoSpan>22.04.2018
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Breed: </PetsInfoSpan>Persian cat
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Comments: </PetsInfoSpan>Lorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem
                  ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                  consectetur Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Eaque eius suscipit explicabo hic dolore
                  mollitia, modi ipsum inventore, reiciendis amet odio voluptas
                  itaque laudantium blanditiis illo nobis consequatur quae
                  perferendis.
                </PetsInfoItem>
              </ul>
              <DeleteBtn type="button">-</DeleteBtn>
            </PetsCard>
            <PetsCard id={pet._id}>
              <PetPhoto
                src="https://www.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7"
                alt={pet.name}
              ></PetPhoto>
              <ul>
                <PetsInfoItem>
                  <PetsInfoSpan>Name: </PetsInfoSpan>
                  {pet.name}
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Date of birth: </PetsInfoSpan>22.04.2018
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Breed: </PetsInfoSpan>Persian cat
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Comments: </PetsInfoSpan>Lorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem
                  ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                  consectetur Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Eaque eius suscipit explicabo hic dolore
                  mollitia, modi ipsum inventore, reiciendis amet odio voluptas
                  itaque laudantium blanditiis illo nobis consequatur quae
                  perferendis.
                </PetsInfoItem>
              </ul>
              <DeleteBtn type="button">-</DeleteBtn>
            </PetsCard>
            <PetsCard id={pet._id}>
              <PetPhoto
                src="https://www.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7"
                alt={pet.name}
              ></PetPhoto>
              <ul>
                <PetsInfoItem>
                  <PetsInfoSpan>Name: </PetsInfoSpan>
                  {pet.name}
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Date of birth: </PetsInfoSpan>22.04.2018
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Breed: </PetsInfoSpan>Persian cat
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Comments: </PetsInfoSpan>Lorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem
                  ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                  consectetur Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Eaque eius suscipit explicabo hic dolore
                  mollitia, modi ipsum inventore, reiciendis amet odio voluptas
                  itaque laudantium blanditiis illo nobis consequatur quae
                  perferendis.
                </PetsInfoItem>
              </ul>
              <DeleteBtn type="button">-</DeleteBtn>
            </PetsCard>
            <PetsCard id={pet._id}>
              <PetPhoto
                src="https://www.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7"
                alt={pet.name}
              ></PetPhoto>
              <ul>
                <PetsInfoItem>
                  <PetsInfoSpan>Name: </PetsInfoSpan>
                  {pet.name}
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Date of birth: </PetsInfoSpan>22.04.2018
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Breed: </PetsInfoSpan>Persian cat
                </PetsInfoItem>
                <PetsInfoItem>
                  <PetsInfoSpan>Comments: </PetsInfoSpan>Lorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem
                  ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                  consectetur Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Eaque eius suscipit explicabo hic dolore
                  mollitia, modi ipsum inventore, reiciendis amet odio voluptas
                  itaque laudantium blanditiis illo nobis consequatur quae
                  perferendis.
                </PetsInfoItem>
              </ul>
              <DeleteBtn type="button">-</DeleteBtn>
            </PetsCard>
          </>
        );
      })}
    </PetsList>
  );
};

export default PetsData;
