// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import Swal from "sweetalert2";
export default function Home() {

    const [formData, setFormData] = React.useState({
        nome: '',
        age: '',
        genero: '',
        email: '',
        stream_date: '',
        feedback: '',
    });
    const [loading, setLoading] = React.useState(false);


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value, // Atualiza o campo correspondente no estado
        }));
    };


    const gender = [
        {id: 1 , gend : 'Masculino'},
        {id: 2 , gend:  'Feminino'},
        {id: 3 , gend:  'Não binário'},
        {id: 4 , gend:  'Prefiro não informar'}
    ]
    const streaminfo = [
        {id: 1 , info: 'No dia do Lançamento'},
        {id: 2 , info: 'Antes de 1 semana depois do Lançamento'},
        {id: 3 , info: 'Depois de 1 semana depois do Lançamento'},
        {id: 4 , info: '1 mês depos do Lançamento'},
        {id: 5 , info: '+ 2 meses depois do Lançamento'},
    ]


    const handleSubmit = async (e) =>{

        e.preventDefault();
        setLoading(true);
        console.log(formData)


        try{
            const response = await fetch('http://127.0.0.1:8000/api/analisar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if(response.ok){
                await Swal.fire({
                    title: 'Success!',
                    text: 'Agradecemos pela sua opinião!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                window.location.reload(true);
            }else{
                const errorData = await response.json();

                await Swal.fire({
                    title: 'Um erro ocorreu!',
                    text: `${errorData.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });

            }



        }catch (e){
            await Swal.fire({
                title: 'Um erro ocorreu!',
                text: 'Erro no servidor. Tente novamente mais tarde.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error(e);
        }finally {
            setLoading(false);
            //Force a hard reload to clear the cache if supported by the browser

        }


    }




    return (
        <div className="min-h-screen bg-gray-100 flex flex-col min-w-screen">
            {/* Cabeçalho */}
            <div className="text-white p-6 flex ">
                <div>
                <span className="uppercase text-xl font-bold align-left text-purple-200"  >Feedback Center</span>
                </div>

            </div>


            {/* Conteúdo principal */}
            <div className="py-2">
                <div>
                    <img src={'src/assets/cover.jpg'} alt={''}/>
                </div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center p-8">
                <div className="text-center">
                    <h1 className="text-4xl  text-black font-bold mb-4">Divertidamente 2 | O Filme</h1>
                    <p className="text-lg text-blue-600">
                        Descubra o emocionante retorno das emoções mais amadas.
                    </p>
                </div>

                <hr/>
                <div className="mt-8 w-full max-w-2xl bg-white p-6 rounded shadow-lg">
                    <p className="text-gray-700">
                        Divertida Mente 2, da Disney e da Pixar, retorna à mente da adolescente Riley, e o faz no
                        momento em que a sala de comando está passando por uma demolição repentina
                        para dar lugar a algo totalmente inesperado: novas emoções! Alegria, Tristeza, Raiva, Medo e
                        Nojinho não sabem bem como reagir quando Ansiedade aparece, e tudo indica que ela não está
                        sozinha.
                    </p>
                </div>
                <div className="py-8">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IAqkUEHLPFc?si=5jjksLhcyCTHX7qu"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <h2 className="text-xl text-black  font-bold mb-4">Disponível</h2>
                <div className="border-solid flex space-x-8 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                         viewBox="0 0 48 48">
                        <path fill="#F44336"
                              d="M5 18c.7 0 1.3 0 2 0 0 4.1 0 8.1 0 12.2-.8.1-1.6.2-2.3.3-1-2.5-2.7-6.8-2.7-6.8S2 28 2 30.8c.4 0-.2 0-2 .3 0-4.3 0-8.7 0-13 .8 0 2 0 2 0l3 7.3C5 25.4 5 20.8 5 18zM14.7 20c0-.6 0-1.4 0-2-1.9 0-3.8 0-5.7 0 0 4 0 8 0 12 1.9-.2 3.8-.4 5.7-.6 0-.6 0-1.4 0-2-1.2.1-2.4.1-3.7.4 0-1.1 0-1.7 0-2.8.9 0 2.1 0 3 0 0-.6 0-1.4 0-2-.9 0-2.1 0-3 0 0-1.1 0-1.9 0-3C11.6 20.1 14.2 20.1 14.7 20zM16 20c.1 0 1.9 0 2 0 0 3.2 0 6 0 9.2.7 0 1.3 0 2-.1 0-3.2 0-5.9 0-9.1.7 0 1.3 0 2 0 0-.6 0-1.4 0-2-2.1 0-3.9 0-6 0C16 18.6 16 19.4 16 20zM28.6 18c-1.9 0-3.7 0-5.6 0 0 3.8 0 7.2 0 11 .2 0 .4 0 .6 0 .4 0 .9 0 1.4 0 0-1.6 0-2.4 0-4 .1 0 2.4 0 2.7 0 0-.6 0-1.4 0-2-.3 0-2.6 0-2.7 0 0-1 0-2 0-3 .2 0 3.1 0 3.6 0C28.6 19.5 28.6 18.6 28.6 18zM32 27.5c0-3.3 0-6.2 0-9.5-.7 0-1.3 0-2 0 0 3.8 0 7.4 0 11.2 1.8.1 3.6.2 5.4.4 0-.6 0-1.3 0-1.9C34.3 27.6 33.1 27.5 32 27.5zM37 29.7c.7.1 1.3.1 2 .2 0-4 0-7.9 0-11.9-.7 0-1.3 0-2 0C37 22 37 25.8 37 29.7zM45.4 24.2c.9-2 1.7-4 2.6-6.1-.7 0-1.5 0-2.2 0-.5 1.3-.9 2.2-1.4 3.4-.5-1.3-.8-2.2-1.3-3.4-.7 0-1.5 0-2.2 0 .8 2 1.5 4 2.4 6.1-.9 2-1.7 4-2.6 6 .7.1 1.4.2 2.1.3.5-1.3 1-2.2 1.5-3.5.5 1.4 1 2.4 1.5 3.8.7.1 1.6.2 2.3.3C47.1 28.7 46.2 26.3 45.4 24.2z"></path>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                         viewBox="0 0 48 48">
                        <path fill="#29b6f6"
                              d="M31.473,14.813c0.273-0.163,0.556-0.339,0.852-0.492c0.765-0.392,1.616-0.59,2.481-0.547	c0.623,0.034,1.192,0.208,1.628,0.666c0.416,0.426,0.568,0.95,0.613,1.518c0.011,0.121,0.011,0.24,0.011,0.371v5.658	c0,0.492-0.066,0.556-0.556,0.556H35.17c-0.087,0-0.174,0-0.263-0.011c-0.13-0.011-0.24-0.121-0.263-0.25	c-0.023-0.121-0.023-0.24-0.023-0.36v-5.059c0.011-0.208-0.011-0.403-0.066-0.6c-0.087-0.339-0.392-0.579-0.742-0.6	c-0.645-0.043-1.289,0.087-1.879,0.361c-0.087,0.023-0.142,0.11-0.13,0.197v5.747c0,0.11,0,0.208-0.023,0.316	c0,0.153-0.121,0.263-0.273,0.263l0,0c-0.163,0.011-0.327,0.011-0.503,0.011h-1.158c-0.403,0-0.492-0.099-0.492-0.503v-5.168	c0-0.186-0.011-0.384-0.053-0.568c-0.076-0.371-0.392-0.634-0.765-0.655c-0.655-0.043-1.321,0.087-1.913,0.371	c-0.087,0.023-0.142,0.121-0.121,0.208v5.823c0,0.403-0.087,0.492-0.492,0.492h-1.465c-0.384,0-0.479-0.11-0.479-0.479v-7.583	c0-0.087,0.011-0.174,0.034-0.263c0.043-0.13,0.174-0.208,0.305-0.208h1.366c0.197,0,0.316,0.121,0.384,0.305	c0.053,0.153,0.087,0.297,0.142,0.46c0.11,0,0.174-0.076,0.25-0.121c0.6-0.371,1.234-0.689,1.945-0.819	c0.547-0.11,1.092-0.11,1.639,0c0.513,0.11,0.973,0.416,1.268,0.852c0.023,0.034,0.043,0.053,0.066,0.076	C31.452,14.79,31.462,14.79,31.473,14.813z M15.327,15.229c0.076-0.023,0.142-0.066,0.186-0.13c0.197-0.197,0.403-0.384,0.623-0.556	c0.568-0.437,1.279-0.655,1.989-0.6c0.284,0.011,0.384,0.099,0.403,0.371c0.023,0.371,0.011,0.753,0.011,1.126	c0.011,0.153,0,0.297-0.023,0.448c-0.043,0.197-0.121,0.273-0.316,0.297c-0.153,0.011-0.297,0-0.448-0.011	c-0.732-0.066-1.442,0.076-2.131,0.305c-0.153,0.053-0.153,0.163-0.153,0.284v5.241c0,0.099,0,0.186-0.011,0.284	c-0.011,0.142-0.121,0.25-0.263,0.25c-0.076,0.011-0.163,0.011-0.24,0.011h-1.421c-0.076,0-0.163,0-0.24-0.011	c-0.142-0.011-0.25-0.13-0.263-0.273c-0.011-0.087-0.011-0.174-0.011-0.263v-7.43c0-0.503,0.053-0.556,0.556-0.556h1.05	c0.284,0,0.416,0.099,0.492,0.371C15.195,14.66,15.261,14.934,15.327,15.229z M19.587,18.265v-3.878	c0.011-0.263,0.11-0.361,0.371-0.371c0.568-0.011,1.137-0.011,1.705,0c0.25,0,0.327,0.076,0.35,0.327	c0.011,0.099,0.011,0.186,0.011,0.284v7.276c0,0.121-0.011,0.24-0.023,0.36c-0.011,0.142-0.121,0.24-0.263,0.25	c-0.066,0.011-0.121,0.011-0.186,0.011h-1.518c-0.053,0-0.099,0-0.153-0.011c-0.153-0.011-0.284-0.13-0.297-0.284	c-0.011-0.087-0.011-0.174-0.011-0.263C19.587,20.755,19.587,19.51,19.587,18.265z M20.855,10.104	c0.174-0.011,0.35,0.023,0.513,0.076c0.59,0.197,0.895,0.71,0.842,1.376c-0.043,0.568-0.469,1.026-1.039,1.115	c-0.24,0.043-0.492,0.043-0.732,0c-0.623-0.121-1.081-0.579-1.039-1.366C19.466,10.53,19.98,10.104,20.855,10.104z M11.404,17.37	c-0.043-0.568-0.197-1.126-0.426-1.639c-0.448-0.939-1.137-1.628-2.184-1.868c-1.202-0.263-2.284,0-3.268,0.732	c-0.066,0.066-0.142,0.121-0.229,0.163c-0.023-0.011-0.043-0.023-0.043-0.034c-0.034-0.11-0.053-0.218-0.087-0.327	c-0.087-0.273-0.197-0.371-0.492-0.371c-0.327,0-0.666,0.011-0.994,0c-0.25-0.011-0.479,0.023-0.655,0.218	c0,3.823,0,7.659,0.011,11.47c0.142,0.229,0.36,0.273,0.613,0.263c0.392-0.011,0.787,0,1.179,0c0.689,0,0.689,0,0.689-0.677v-3.113	c0-0.076-0.034-0.163,0.043-0.229c0.547,0.426,1.213,0.689,1.902,0.753c0.963,0.099,1.834-0.142,2.568-0.797	c0.536-0.492,0.929-1.126,1.137-1.826C11.461,19.194,11.48,18.287,11.404,17.37z M8.793,19.631c-0.076,0.339-0.25,0.645-0.503,0.874	c-0.284,0.24-0.634,0.384-1.005,0.384c-0.556,0.034-1.103-0.087-1.595-0.35c-0.121-0.053-0.197-0.174-0.186-0.305v-1.978	c0-0.655,0.011-1.312,0-1.966c-0.011-0.153,0.076-0.284,0.218-0.339c0.6-0.284,1.224-0.416,1.879-0.284	c0.46,0.066,0.852,0.361,1.039,0.787c0.163,0.35,0.263,0.732,0.284,1.115C8.991,18.265,8.991,18.965,8.793,19.631z M41.045,18.976	c0.819,0.153,1.66,0.163,2.481,0.034c0.479-0.066,0.939-0.208,1.366-0.437c0.492-0.284,0.852-0.677,1.005-1.224	c0.384-1.376-0.208-2.765-1.639-3.276c-0.7-0.229-1.442-0.305-2.174-0.208c-1.726,0.197-2.85,1.147-3.363,2.797	c-0.36,1.126-0.316,2.271-0.023,3.408c0.384,1.453,1.344,2.316,2.797,2.621c0.829,0.186,1.671,0.153,2.502,0.023	c0.437-0.076,0.874-0.186,1.289-0.35c0.25-0.099,0.384-0.25,0.371-0.536c-0.011-0.263,0-0.536,0-0.808	c0-0.327-0.13-0.426-0.448-0.35c-0.318,0.076-0.623,0.142-0.939,0.208c-0.677,0.142-1.376,0.142-2.055,0.023	c-0.929-0.186-1.529-0.982-1.476-1.966C40.837,18.944,40.945,18.953,41.045,18.976z M40.771,17.305	c0.034-0.263,0.11-0.513,0.208-0.753c0.327-0.797,1.016-1.071,1.715-1.026c0.197,0.011,0.392,0.053,0.579,0.13	c0.284,0.121,0.469,0.384,0.503,0.689c0.034,0.186,0.023,0.384-0.034,0.568c-0.13,0.392-0.448,0.556-0.829,0.634	c-0.229,0.053-0.469,0.076-0.71,0.053c-0.426,0-0.863-0.034-1.289-0.099C40.748,17.479,40.748,17.479,40.771,17.305z"></path>
                        <path fill="#29b6f6"
                              d="M25.127,38.063c-0.414-0.011-0.83-0.011-1.242,0c-0.57-0.03-1.14-0.052-1.71-0.093	c-1.513-0.115-3.017-0.342-4.487-0.685c-5.09-1.181-9.557-3.555-13.455-7.006c-0.364-0.323-0.705-0.653-1.058-0.986	c-0.082-0.074-0.156-0.177-0.197-0.28c-0.063-0.145-0.03-0.301,0.074-0.414c0.104-0.113,0.271-0.156,0.414-0.093	c0.093,0.041,0.186,0.082,0.271,0.134c3.722,2.302,7.784,3.98,12.044,4.975c1.431,0.332,2.87,0.59,4.322,0.778	c2.083,0.26,4.186,0.353,6.28,0.28c1.129-0.03,2.25-0.134,3.369-0.28c2.612-0.332,5.194-0.923,7.691-1.752	c1.316-0.434,2.601-0.934,3.856-1.513c0.186-0.104,0.414-0.134,0.622-0.082c0.342,0.082,0.549,0.434,0.466,0.778	c-0.011,0.041-0.03,0.093-0.052,0.134c-0.082,0.156-0.197,0.29-0.342,0.393c-1.192,0.934-2.478,1.752-3.835,2.436	c-2.56,1.294-5.298,2.218-8.116,2.747C28.414,37.824,26.777,38,25.127,38.063z M42.946,27.957c0.685,0.022,1.357,0.063,2.02,0.238	c0.186,0.052,0.364,0.115,0.538,0.197c0.238,0.093,0.393,0.323,0.425,0.57c0.041,0.29,0.052,0.59,0.03,0.891	c-0.134,1.773-0.685,3.482-1.597,5.006c-0.332,0.549-0.735,1.047-1.201,1.483c-0.093,0.093-0.208,0.167-0.332,0.208	c-0.197,0.052-0.323-0.052-0.332-0.249c0.011-0.104,0.03-0.208,0.074-0.312c0.364-0.975,0.715-1.938,0.995-2.944	c0.167-0.549,0.28-1.108,0.353-1.68c0.022-0.208,0.03-0.414,0.011-0.622c-0.011-0.353-0.238-0.653-0.581-0.757	c-0.323-0.104-0.653-0.167-0.995-0.186c-0.954-0.041-1.906,0-2.851,0.125l-1.253,0.156c-0.134,0.011-0.26,0-0.332-0.125	c-0.074-0.125-0.041-0.249,0.03-0.373c0.082-0.115,0.186-0.219,0.312-0.29c0.767-0.549,1.628-0.882,2.54-1.099	C41.505,28.048,42.22,27.978,42.946,27.957z"></path>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                         viewBox="0 0 40 40">
                        <path fill="#98ccfd"
                              d="M10,37.5c-4.136,0-7.5-3.364-7.5-7.5V10c0-4.136,3.364-7.5,7.5-7.5h20c4.136,0,7.5,3.364,7.5,7.5v20 c0,4.136-3.364,7.5-7.5,7.5H10z"></path>
                        <path fill="#4788c7"
                              d="M30,38H10c-4.411,0-8-3.589-8-8V10c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C38,34.411,34.411,38,30,38z M10,3c-3.859,0-7,3.141-7,7v20c0,3.859,3.141,7,7,7h20c3.859,0,7-3.141,7-7V10c0-3.859-3.141-7-7-7H10 z"></path>
                        <path fill="#fff"
                              d="M30.493,16c0,2.222-1.778,4-4,4s-4-1.778-4-4s1.778-4,4-4S30.493,13.778,30.493,16z"></path>
                        <path fill="#98ccfd"
                              d="M28.493,16c0-1.12-0.88-2-2-2s-2,0.88-2,2s0.88,2,2,2S28.493,17.12,28.493,16z"></path>
                        <rect width="2" height="8" x="11" y="12" fill="#fff"></rect>
                        <rect width="3.221" height="2" x="11.92" y="15" fill="#fff"></rect>
                        <path fill="#fff"
                              d="M22.8,18c0,1.111-0.967,2-2.417,2h-1.45H18.45H17v-8h3.383c1.45,0,2.417,0.889,2.417,2	s-0.58,2-1.45,2C22.172,16,22.8,16.889,22.8,18z"></path>
                        <path fill="#98ccfd"
                              d="M19,14v1.25h1.094c0.35,0,0.656-0.292,0.656-0.625S20.444,14,20.094,14H19z"></path>
                        <rect width="2" height="8" x="14.5" y="12" fill="#fff"></rect>
                        <path fill="#98ccfd"
                              d="M19,16.75V18h1.094c0.35,0,0.656-0.292,0.656-0.625s-0.306-0.625-0.656-0.625H19z"></path>
                        <path fill="#fff"
                              d="M28.024,16c0-0.858-0.674-1.531-1.531-1.531S24.961,15.142,24.961,16s0.674,1.531,1.531,1.531	S28.024,16.858,28.024,16z"></path>
                        <path fill="#fff"
                              d="M14.267,20.854c-0.624,0.121-1.15,0.465-1.54,0.929c-0.627-0.726-1.61-1.137-2.679-0.929 C8.715,21.114,7.8,22.363,7.8,23.722v3.828c0,0.387,0.313,0.7,0.7,0.7h0.7v-4.641c0-0.777,0.632-1.409,1.409-1.409 s1.409,0.632,1.409,1.409v3.941c0,0.387,0.313,0.7,0.7,0.7h0.7v-4.641c0-0.777,0.632-1.409,1.409-1.409s1.409,0.632,1.409,1.409 v3.941c0,0.387,0.313,0.7,0.7,0.7h0.7v-4.641C17.638,21.877,16.061,20.505,14.267,20.854z"></path>
                        <path fill="#fff"
                              d="M25.2,28.25h-0.7c-0.387,0-0.7-0.313-0.7-0.7v-6.1c0-0.387,0.313-0.7,0.7-0.7h0.7V28.25z"></path>
                        <path fill="#fff"
                              d="M21.5,28.388c-1.885,0-3.419-1.744-3.419-3.888s1.534-3.888,3.419-3.888s3.419,1.744,3.419,3.888 S23.385,28.388,21.5,28.388z M21.5,22.013c-1.113,0-2.019,1.115-2.019,2.487s0.905,2.487,2.019,2.487s2.019-1.115,2.019-2.487 S22.613,22.013,21.5,22.013z"></path>
                        <path fill="#fff"
                              d="M25.443,28.2h1.234c0.318,0,0.616-0.151,0.805-0.406l1.283-1.739c0.12-0.163,0.363-0.163,0.483,0	l1.283,1.739c0.189,0.256,0.487,0.406,0.805,0.406h1.234l-2.256-3.058c-0.26-0.353-0.26-0.834,0-1.187l2.364-3.205h-1.234	c-0.318,0-0.616,0.151-0.805,0.406l-1.391,1.885c-0.12,0.163-0.363,0.163-0.483,0l-1.391-1.885	c-0.189-0.256-0.487-0.406-0.805-0.406h-1.234l2.364,3.205c0.26,0.353,0.26,0.834,0,1.187L25.443,28.2z"></path>
                        <rect width=".75" height=".4" x="32.75" y="20.75" fill="#fff"></rect>
                    </svg>

                </div>

                <div className="p-8">
                    <button type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Disponível no Prime Video
                    </button>
                    <a href="#">Link Alternativo</a>
                </div>
                <div className="w-full bg-purple-600  p-4">
                    <h2 className="text-xl text-white  font-bold mb-4 py-2">Já assistiu ? </h2>
                    <p className="text-sm text-blue-900 ">Diga-nos o que achou?</p>
                </div>

                <div className="p-4 w-2/3 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-4 p-4">
                        <div>
                            <label
                                htmlFor={"nome"}
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Nome Completo
                            </label>
                            <input
                                type={"text"}
                                id={"nome"}

                                value={formData.nome}
                                onChange={handleChange}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        {/* Container para campos Idade e Sexo */}
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label
                                    htmlFor={"age"}
                                    className="block mb-2 text-sm font-medium text-gray-700"
                                >
                                    Idade
                                </label>
                                <input
                                    type={"number"}
                                    id={"age"}

                                    value={formData.age}
                                    onChange={handleChange}
                                    className="p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    min="5"
                                    max="100"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label
                                    htmlFor={"genero"}
                                    className="block mb-2 text-sm font-medium text-gray-700"
                                >
                                    Género
                                </label>
                                <select
                                    name={"genero"}
                                    id={"genero"}
                                    className="p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"

                                    value={formData.genero}
                                    onChange={handleChange}
                                    required
                                >
                                    {gender.map((option) => (
                                        <option key={option.id} value={option.id}>
                                            {option.gend}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor={"email"}
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                E-mail
                            </label>
                            <input
                                type={"email"}
                                id={"email"}

                                value={formData.email}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="John.Doe@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="stream_date"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Quando assistiu?
                            </label>
                            <select
                                name={"stream_date"}
                                id={"stream_date"}
                                className="w-full bg-gray-100 border border-gray-200 text-gray-700 rounded shadow-md px-3 py-1.5 focus:outline-none focus:border-blue-200"

                                value={formData.stream_date}
                                onChange={handleChange}
                                required
                            >
                                {/*<option value =""  className="block mb-2 text-sm font-medium text-gray-700">  </option>*/}
                                {streaminfo.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.info}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor={"feedback"}
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                O que achou? Gostou ? Escreva-nos
                            </label>
                            <textarea
                                id={"feedback"}
                                onChange={handleChange}
                                value={formData.feedback}
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Deixe aqui o seu comentário acerca do filme ..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 flex items-center justify-center"
                            disabled={loading}
                        >
                            {loading ? (
                                <svg
                                    aria-hidden="true"
                                    role="status"
                                    className="inline w-4 h-4 mr-2 text-white animate-spin"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.59c0 27.61-22.39 50-50 50S0 78.2 0 50.59 22.39.59 50 .59s50 22.39 50 50Z"
                                        fill="#E5E7EB"
                                    />
                                    <path
                                        d="M93.97 39.04c-2.75-.88-5.65-.88-8.4 0a34.62 34.62 0 0 0-25.1-10.36c-14.36 0-26.36 9.48-30.9 22.56a5.98 5.98 0 0 0-.5 1.6h.01c.04.26.1.53.18.8a32.2 32.2 0 0 0-5.16 1.56c-1.05.45-2.1.92-3.13 1.46a5.98 5.98 0 0 0-1.7-.5l-.76-.02a30.88 30.88 0 0 0-8.03 4.74 39.34 39.34 0 0 1 3.14 5.02c-.03.02-.06.04-.08.06A45.86 45.86 0 0 1 .18 49.04c0-25.36 19.74-46 45.46-46.46.68 0 1.37.02 2.05.07A47.9 47.9 0 0 1 93.97 39.04Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            ) : (
                                'Enviar'
                            )}
                        </button>

                        <p className="text-sm text-black py-2">Obrigado por nos ajudar a melhorar!</p>
                    </form>


                    <div>

                        <a href="/feedback-center"
                           className="bg-blue-300 hover:bg-blue-500 hover:text-white text-white font-bold py-2 px-4 rounded-full">
                            Veja o que os outros acham
                        </a>
                    </div>
                </div>


            </div>

            <div className="bg-gray-900 p-8">
                <p>Copyright &#169; Muvimbene Maposse - Todos os direitos reservados </p>
            </div>
        </div>
    )
        ;
}
