import axios from 'axios';

export const fetchData = async (inputValue, page, quantityElements) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=38356283-5f79dde593935cdb1a9b34fa5&image_type=photo&orientation=horizontal&per_page=${quantityElements}&safesearch=true`
  );
  return response;
};