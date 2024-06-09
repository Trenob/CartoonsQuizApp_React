import React from 'react';

//Images component
//takes property form (string) to reference a specific image
const Image = ({ Network, Show }) => {

    //string to public url + gokusprites folder
    var publicUrlforImages = process.env.PUBLIC_URL + 'publicImages';
    var publicUrlforCartoonNetwork = process.env.PUBLIC_URL + 'cartoonnetworkImages';
    var publicUrlforDisney = process.env.PUBLIC_URL + 'disneyImages';
    var publicUrlforNickelodeon = process.env.PUBLIC_URL + 'nickelodeonImages';

    //Public Images array
    const publicImages = [
        { Network: 'Rules', Show: 'Da_Rules', ImageSource: publicUrlforImages + '/Da_Rules_Stock_Image.webp' }
    ];

    //CartoonNetwork Images array
    const cartoonNetworkImages = [
        {
            Network: 'CartoonNetwork',
            Show: 'PowerPuffGirls',
            ImageSource: publicUrlforCartoonNetwork + '/PowerpuffGirls.png'
        },
        {
            Network: 'CartoonNetwork',
            Show: 'KND',
            ImageSource: publicUrlforCartoonNetwork + '/CodenameKidsNextDoor.png'
        },
        {
            Network: 'CartoonNetwork',
            Show: 'FostersHome',
            ImageSource: publicUrlforCartoonNetwork + '/FostersHome.png'
        }
    ];

    //Diseny Images array
    const disneyImages = [
        {
            Network: 'Disney',
            Show: 'DannyPhantom',
            ImageSource: publicUrlforDisney + '/DannyPhantom.png'
        },
        {
            Network: 'Disney',
            Show: 'LiloAndStitch',
            ImageSource: publicUrlforDisney + '/LiloAndStitch.png'
        },
        {
            Network: 'Disney',
            Show: 'PhineasAndFerb',
            ImageSource: publicUrlforDisney + '/PhineasAndFerb.png'
        }
    ];

    //Nickelodeon Images array
    const nickelodeonImages = [
        {
            Network: 'Nickelodeon',
            Show: 'FairyOddParents',
            ImageSource: publicUrlforNickelodeon + '/FairyOddParents.png'
        },
        {
            Network: 'Nickelodeon',
            Show: 'JimmyNeutron',
            ImageSource: publicUrlforNickelodeon + '/JimmyNeutron.png'
        },
        {
            Network: 'Nickelodeon',
            Show: 'SpongebobSquarepants',
            ImageSource: publicUrlforNickelodeon + '/SpongebobSquarepants.png'
        }
    ];

    var image = publicImages.find(img => img.Show === Show);

    //decide which network to use for image
    switch (Network) {
        case 'Public':
            image = publicImages.find(img => img.Show === Show);
            break;
        case 'CartoonNetwork':
            image = cartoonNetworkImages.find(img => img.Show === Show);
            break;
        case 'Disney':
            image = disneyImages.find(img => img.Show === Show);
            break;
        case 'Nickelodeon':
            image = nickelodeonImages.find(img => img.Show === Show);
            break;
        default:
        //
    }

    //Return the image
    return (
        //Div returns an image if the form is found, if not found it returns image not found
        <>{image ? <img src={image.ImageSource} alt={Show}/> : <p>Image not found</p>}</>
    );
};

export default Image;
