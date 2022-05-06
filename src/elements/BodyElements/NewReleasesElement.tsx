// elements import
import { Skeleton } from 'antd';
import { useGetNewReleasesQuery } from '../../redux/services/newReleasesApi';

// stylesheet
import './index.css';

const NewReleasesElement = () => {
    const { data, isError, isLoading } = useGetNewReleasesQuery(//undefined, { pollingInterval: 20000 }
    );

    const albums = (data as any)?.albums.items; // i know  i should use an interface for albums here but i am tired.
    console.log(albums);

    return (
        <div className="card__container">
            {isError && <div>Error, Please logout, check your network, and try again</div>}
            {isLoading && <Skeleton.Image />}
            {albums && albums.slice(0, 6).map((album: any) => (
                <div className="card" key={album.id}>
                    <div className="card__image-container">
                        <img
                            className="card__image"
                            src={
                                album.images[0].url ||
                                'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80'
                            }
                            alt="song"
                        />
                    </div>
                    <svg className="card__svg" viewBox="0 0 800 500">
                        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                    </svg>

                    <div className="card__content pb-5">
                        <h1 className="card__title">{album.name}</h1>
                        <p className=''>Release Date: {album.release_date}</p>
                    </div>
                </div>
            ))
            }
        </div>
    )

}

export default NewReleasesElement;
