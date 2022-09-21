import React, {useState} from 'react';
import Image from "next/image";


const styles = {
    wrapper: `max-w-[46rem] h-[10rem] flex items-center gap-[1rem] cursor-pointer`,
    postDetails: `flex-[2.5] flex flex-col`,
    authorContainer: `flex gap-[.4rem]`,
    authorName: `font-semibold`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    authorImage: `object-cover`,
    title: `font-bold text-2xl`,
    briefing: `text-[#787878]`,
    detailsContainer: `flex items-center justify-between text-[#787878]`,
    articleDetails: `my-2 text-[.8rem]`,
    bookmarkContainer: `cursor-pointer`,
    category: `bg-[#F2F3F2] p-1 rounded-full`,
    thumbnailContainer: `flex-1`,
}

const PostCard = ({}) => {
    const [authorData, setAuthorData] = useState(null)

    return (
        <div className={styles.wrapper}>
            <div className={styles.postDetails}>
                <div className={styles.authorContainer}>
                    <div className={styles.authorImageContainer}>
                        <Image
                            src={'https://avatars.githubusercontent.com/u/38469892?v=4'}
                            width={40}
                            height={40}
                            className={styles.authorImage}
                        />
                    </div>
                    <div className={styles.authorName}>Rokas Rudzianskas</div>
                </div>
                <h1 className={styles.title}>7 free tools that Will Make you more Productive in 2022</h1>
                <p className={styles.briefing}>
                    Productivity is a key to success. It is the ability to do more in less time. It is the ability to do more in less time.
                </p>
            </div>
        </div>
    );
};

export default PostCard;
// by Rokas with ❤️
