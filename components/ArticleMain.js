import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'

import Author from '../static/author.jpg'
import Thumbnail from '../static/thumbnail.webp'

const styles = {
    wrapper: `flex items-center justify-center flex-[3] border-l border-r w-full `,
    content: `h-screen overflow-scroll p-[2rem] w-full`,
    referencesContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: `flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    image: `object-cover`,
    column: `flex-1 flex flex-col justify-center`,
    postDetails: `flex gap-[.2rem] text-[#787878]`,
    listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
    socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
    space: `w-[.5rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
    title: `font-bold text-3xl`,
    subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
    articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
}

const ArticleMain = ({ post, author }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {post.length > 0 && author.length > 0 ? (
                    <>
                        <div className={styles.referencesContainer}>
                            <div className={styles.authorContainer}>
                                <div className={styles.authorProfileImageContainer}>
                                    <Image
                                        className={styles.image}
                                        src={`https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80`}
                                        alt='author'
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className={styles.column}>
                                    <div>{author[0].data?.name}</div>
                                    <div className={styles.postDetails}>
                    <span>
                      {/*{new Date(post[0].data?.postedOn).toLocaleString(*/}
                      {/*    'en-US',*/}
                      {/*    {*/}
                      {/*        day: 'numeric',*/}
                      {/*        month: 'short',*/}
                      {/*    },*/}
                      {/*)}{' '}*/}
                        Jun 14
                        • {post[0]?.data?.postLength} 14 min read •
                    </span>
                                        <span className={styles.listenButton}>
                      <AiFillPlayCircle /> Listen
                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.socials}>
                                <IoLogoTwitter />
                                <FaFacebook />
                                <GrLinkedin />
                                <HiOutlineLink />
                                <div className={styles.space} />
                                <BiBookmarks />
                                <FiMoreHorizontal />
                            </div>
                        </div>
                        <div className={styles.articleMainContainer}>
                            <div className={styles.bannerContainer}>
                                <Image
                                    className={styles.image}
                                    src={`https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80`}
                                    alt='banner'
                                    height={100}
                                    width={100}
                                />
                            </div>
                            <h1 className={styles.title}>{post[0].data?.title}</h1>
                            <h4 className={styles.subtitle}>
                                <div>
                                    {/*{author[0].data?.name},{' '}*/}
                                    {/*{new Date(post[0].data?.postedOn).toLocaleString('en-US', {*/}
                                    {/*    day: 'numeric',*/}
                                    {/*    month: 'short',*/}
                                    {/*    year: 'numeric',*/}
                                    {/*})}*/}
                                    Rokas Rudzianskas Jun 13
                                </div>
                                <div>{post[0]?.data?.brief}</div>
                            </h4>
                            <div className={styles.articleText}>

                                {post[0]?.data?.body}

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                                doloremque. Quaerat provident commodi consectetur veniam similique ad
                                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                                quasi aliquam eligendi, placeat qui corporis!
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}

export default ArticleMain;
