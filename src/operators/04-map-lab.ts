import { fromEvent, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text: HTMLDivElement = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac faucibus tortor, ut lobortis dolor. Suspendisse potenti. Donec urna dui, tristique quis est eget, tincidunt ornare lorem. Curabitur turpis ante, rutrum nec condimentum ac, convallis eget libero. Vivamus nec nunc vestibulum, tempus orci nec, fermentum sem. Aliquam rhoncus, ante ac bibendum suscipit, erat mauris placerat dolor, nec gravida nunc purus condimentum ipsum. Sed pharetra scelerisque bibendum. Aliquam congue quis risus a bibendum. Nulla vitae egestas est. Etiam mattis nec mi vitae congue. Aenean tincidunt sed magna ac hendrerit. Phasellus sapien leo, rutrum quis tellus eu, pellentesque vulputate erat. Donec eleifend diam ac odio consectetur, ut semper nunc rutrum. Donec tincidunt lectus a purus facilisis, non viverra libero aliquam. Nullam ac lacus nisi.

Mauris varius augue a lectus accumsan ultricies. Nam sagittis, neque vel malesuada volutpat, velit ante varius purus, eget molestie tortor ante eu lectus. Nulla lacinia, est eget sollicitudin consectetur, leo dui interdum mi, ac ultrices nisi ex ac magna. Aliquam erat volutpat. Cras molestie laoreet elementum. Vestibulum molestie accumsan nisi, in fermentum est venenatis in. Vivamus congue turpis eros, sed auctor turpis feugiat ut. Phasellus dictum sagittis nisl, sit amet elementum ligula facilisis et. Sed in orci laoreet, mollis lectus sed, pellentesque mauris. Morbi diam arcu, cursus ac imperdiet at, dictum in nisl. Quisque pharetra lorem consectetur, placerat erat eu, ullamcorper sapien. Etiam pellentesque vel lectus sit amet blandit. Sed posuere gravida dolor et aliquet. Mauris laoreet vel nibh quis scelerisque.

In quis dictum nunc. Proin vitae dui nec neque semper varius et id leo. Proin malesuada tortor eu velit tristique, eu faucibus dui mattis. Praesent quis ipsum et leo gravida mollis. Donec pretium vulputate urna a lacinia. Fusce consectetur luctus iaculis. Quisque quis augue sodales, commodo ex dapibus, ullamcorper odio. Donec at congue nibh, sit amet efficitur dui. In interdum, mi eget maximus vulputate, ligula quam scelerisque arcu, ut sollicitudin odio sem et mauris. In hac habitasse platea dictumst. Etiam dictum mi ac lorem placerat, at dictum ex dignissim. Vivamus sit amet pellentesque nisi, sit amet commodo velit. Duis nec urna a nisl mollis tincidunt. Aenean et lectus et sapien tempus luctus. Sed maximus fringilla massa quis porta. Praesent at ultrices quam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis libero vel sollicitudin malesuada. Phasellus non sapien eget ligula dignissim ultricies ultrices vel ligula. Ut sagittis tellus eget tortor aliquam fermentum. Pellentesque convallis neque ac mattis interdum. Proin vel auctor nibh. Donec pretium lorem non gravida maximus. Nullam urna ligula, eleifend nec quam a, semper tincidunt libero. Fusce blandit purus ex, eu tempor metus posuere eget. Etiam eget pulvinar turpis, nec ornare purus. Quisque nisl lorem, venenatis eu velit at, porta viverra mauris. Duis a auctor purus. Vivamus vitae ex porta, pretium lorem vel, vulputate neque. Integer dictum vitae risus eu semper. Etiam mattis in tortor interdum pellentesque. Pellentesque eu magna id urna tincidunt tincidunt semper in enim.

Curabitur viverra, urna ut semper tincidunt, nunc quam gravida nisl, id posuere risus quam sed nisi. Morbi dolor libero, mollis eu elit in, dignissim pulvinar quam. Integer porttitor rhoncus est sed dictum. Donec ultricies dapibus ipsum in venenatis. Etiam sed nunc erat. Donec eleifend porttitor dapibus. Sed dictum justo sem, lacinia euismod dolor tincidunt id. Donec et dolor cursus, condimentum velit eget, maximus diam. Nulla ut ex mauris. Nulla et finibus erat. Mauris enim ipsum, rhoncus quis massa id, molestie sagittis ligula. Aliquam placerat orci ac lacus cursus elementum.

Nam dictum orci sed congue dapibus. Pellentesque sit amet purus dignissim, efficitur mi sit amet, varius erat. Mauris pharetra finibus fringilla. Fusce at rutrum ante. Vestibulum volutpat libero vitae lectus eleifend malesuada. Fusce bibendum nulla ac leo pellentesque, et faucibus enim iaculis. Maecenas fringilla nunc nec magna tincidunt consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eleifend fringilla est vel ullamcorper. Donec dignissim justo non est maximus sagittis. Aliquam erat volutpat. Quisque at nisi sed metus dapibus vestibulum.

Sed sodales, urna in blandit maximus, ex metus pulvinar quam, vitae rhoncus erat diam sit amet risus. Nam augue velit, hendrerit sed porta at, lacinia vitae felis. Pellentesque hendrerit, lectus at pharetra luctus, nunc dui aliquet ligula, nec suscipit est metus ac mi. Proin eleifend a enim auctor posuere. Aliquam fermentum fermentum nisi. Integer maximus, ante sit amet facilisis malesuada, ligula lacus semper erat, vitae aliquet lectus sem at orci. Sed blandit non turpis vitae condimentum. Mauris arcu purus, molestie at dapibus id, rhoncus at libero. Donec vitae facilisis orci. Donec cursus nisi orci, at ullamcorper tellus sollicitudin eu. Maecenas quis interdum enim. Sed suscipit, justo vel vehicula tempor, risus est mattis neque, ac sollicitudin dolor nibh in quam. Fusce interdum nisl vel velit faucibus semper.

In purus tortor, interdum et tellus ut, efficitur sollicitudin lacus. Ut vitae facilisis elit, ut tincidunt ante. Phasellus eget nisl quis quam commodo aliquam. Pellentesque ac porttitor est. Vestibulum ipsum nisi, tristique a sem a, hendrerit rutrum lacus. Sed pharetra at ligula sit amet congue. Aenean et massa sed est dignissim fermentum. Morbi nec sodales sem. Donec sollicitudin imperdiet leo. Pellentesque tincidunt ipsum ut rutrum lobortis. Sed ultrices malesuada magna. Mauris quam lorem, posuere ut mattis sit amet, ultricies ut ipsum. Cras sed elit ornare, ullamcorper neque nec, efficitur tellus. Sed ex odio, tempus sit amet dolor sed, ornare tincidunt diam. In eu porttitor ante.

Nulla pellentesque porta libero sed suscipit. Donec auctor neque fringilla ante viverra, nec facilisis quam semper. Cras convallis pulvinar erat sit amet mattis. Donec gravida varius quam, quis finibus ipsum pretium tincidunt. Sed porttitor dui eget nunc posuere rhoncus. Sed ac sem ultrices, vulputate augue eu, porta mauris. Nam rhoncus, orci facilisis laoreet vehicula, elit nibh ullamcorper elit, ut mollis tellus diam ut ante. Sed aliquet, nisl efficitur rhoncus iaculis, neque libero feugiat risus, vel sollicitudin ipsum est ut orci. Sed ut lobortis arcu. Duis tincidunt purus in ante finibus blandit.

Pellentesque varius viverra arcu sed gravida. Morbi ut blandit magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dignissim odio sit amet ipsum ultricies pharetra. Donec placerat viverra ipsum id sodales. Vivamus egestas accumsan erat at posuere. Praesent turpis dui, ornare ac pharetra eget, malesuada eget nulla. Quisque ut turpis et mi dapibus sagittis. Fusce molestie mi neque, vel egestas mauris condimentum id. Integer ex purus, imperdiet sed diam a, ornare interdum enim. Fusce ornare nisi neque, sit amet consectetur lectus tempor at. Ut elementum, nulla a mollis condimentum, arcu tellus maximus elit, sit amet iaculis ex turpis nec justo. Nam pharetra in odio quis venenatis. In commodo, lorem vel cursus mollis, nunc sem auctor justo, sit amet venenatis risus nisi ut nunc. Ut viverra diam ac tempor dignissim.
`;

const body: HTMLBodyElement = document.querySelector('body');
body.append(text);

const progressBar: HTMLDivElement = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// Streams

const scroll$: Observable<Event> = fromEvent<Event>(document, 'scroll');

const scrollCalculate: (data: Event) => number = (data: Event | any): number => {
    const { scrollTop, scrollHeight, clientHeight } = data.target.documentElement;
    // console.log(scrollTop, scrollHeight, clientHeight);
    return ((scrollTop / (scrollHeight - clientHeight))* 100);
}

const progress$: Observable<number> = scroll$.pipe(
    map((data: Event): number => {
        return scrollCalculate(data);
    }),
    tap(console.log)
);

progress$.subscribe((data: any): any => {
    progressBar.style.width = `${data}%`
});

// scroll$.subscribe(console.log)