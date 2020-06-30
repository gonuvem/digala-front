import Cloudinary from '../../utils/cloudinaryConstants';

export default function uploadImage(event: any, cb: Function): void {
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${Cloudinary.cloudName}/image/upload`;

  const file = event.target.files[0];
  const data = new FormData();

  data.append('api_key', Cloudinary.apiKey);
  data.append('upload_preset', Cloudinary.uploadPreset);
  data.append('public_id', `${file.name}${Date.now()}`);
  data.append('file', file);

  fetch(cloudinaryUrl, {
    method: 'POST',
    body: data,
  })
    .then((response) => response.json())
    .then((responseData: any) => {
      cb(responseData);
    })
    .catch((err) => {
      console.error('Error >> ', err);
    });
}
