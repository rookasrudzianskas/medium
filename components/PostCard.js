import React, {useState} from 'react';
import Image from "next/image";
import {FiBookmark} from "react-icons/all";


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
                <div className={styles.briefing}>
                    Productivity is a key to success. It is the ability to do more in less time. It is the ability to do more in less time.
                </div>
                <div className={styles.detailsContainer}>
                    <span className={styles.articleDetails}>
                      {/*{new Date(post.data.postedOn).toLocaleString('en-US', {*/}
                      {/*    day: 'numeric',*/}
                      {/*    month: 'short',*/}
                      {/*})}*/}
                        Jun 15
                        •
                        {/*{post.data.postLength}*/}
                        14 min read •{' '}
                        <span className={styles.category}>
                            Productivity
                            {/*{post.data.category}*/}
                        </span>
                    </span>
                    <span className={styles.bookmarkContainer}>
                <FiBookmark className='h-5 w-5' />
            </span>
                </div>

            </div>
                <div className={styles.thumbnailContainer}>
                    <Image
                        // src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
                        src={"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
                        alt='thumbnail'
                        height={100}
                        width={100}
                    />
                </div>
        </div>
    );
};

export default PostCard;
// by Rokas with ❤️
