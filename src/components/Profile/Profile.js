import {Image, List, ListItm, Wrapper} from './Profile.styled'


export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper class="profile">
      <div class="description">
        <Image
          src={avatar}
          alt="User avatar"
          class="avatar"
          width="150"
        />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <List class="stats">
        <ListItm>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </ListItm>
        <ListItm>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </ListItm>
        <ListItm>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </ListItm>
      </List>
    </Wrapper>
  );
};
//* у нас є дані у файлі data.json і нам треба щоб компонент Profile їх зарендерив на сторінку! Як це зробити?
//* передати нашій компоненті пропси..
//* а як це робиться?
//* йди у Арр і у компоненті профайл, прямо всередині встав items={}, дужки фігурні потрібно ставити якщо передаєш не просто "рядок"
//*items це просто назва, якою ми обізвали аргумент для нашої функції-компоненти. Але ж їх, ці данні, треба ще сюди імпортувати до Арр..
//*зроби імпорт назва фром шлях, а тоді цю назву встав у фігурних дужках до пропса.. хай щастить, майбутній девелопере!!!
//* і не забудь у файлі з компонентою ж вставити теж, тобто передати, щоб же ж на виклику туди вони зайшли ж а то не буде чого обробляти ж
