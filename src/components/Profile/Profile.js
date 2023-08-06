import {Image} from './Profile.styled'
export const Profile = ({ data }) => {
  return (
    <div class="profile">
      <div class="description">
        <Image
          src={data.avatar}
          alt="User avatar"
          class="avatar"
          width="150"px
        />
        <p class="name">{data.username}</p>
        <p class="tag">{data.tag}</p>
        <p class="location">{data.location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{data.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{data.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
//* у нас є дані у файлі data.json і нам треба щоб компонент Profile їх зарендерив на сторінку! Як це зробити?
//* передати нашій компоненті пропси..
//* а як це робиться?
//* йди у Арр і у компоненті профайл, прямо всередині встав items={}, дужки фігурні потрібно ставити якщо передаєш не просто "рядок"
//*items це просто назва, якою ми обізвали аргумент для нашої функції-компоненти. Але ж їх, ці данні, треба ще сюди імпортувати до Арр..
//*зроби імпорт назва фром шлях, а тоді цю назву встав у фігурних дужках до пропса.. хай щастить, майбутній девелопере!!!
//* і не забудь у файлі з компонентою ж вставити теж, тобто передати, щоб же ж на виклику туди вони зайшли ж а то не буде чого обробляти ж
