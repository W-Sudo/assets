//import FavPic from "./FavPic";

export default function Aside(){
    return (
        <aside className="aside">
            <h2>Favourite photos</h2>
            <div className="img">
            <a href="src/Images/favorite-1.jpg"><img 
            src="src/Images/favorite-1_th.jpg" 
            alt="Small black bird, black claws, long black slender beak, links to larger version of the image"
            /></a>
            <a href="src/Images/favorite-2.jpg"><img 
            src="src/Images/favorite-2_th.jpg" 
            alt="Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress, links to larger version of the image"
            /></a>
            <a href="src/Images/favorite-3.jpg"><img 
            src="src/Images/favorite-3_th.jpg" 
            alt="Top half of a large bird with white plumage, very long curved narrow light colored break, links to larger version of the image"
            /></a>
            <a href="src/Images/favorite-4.jpg"><img 
            src="src/Images/favorite-4_th.jpg" 
            alt="Large bird, mostly white plumage with black plumage on back and rear, long straight white beak, links to larger version of the image"
            /></a>
            </div>
        </aside>
    )
}