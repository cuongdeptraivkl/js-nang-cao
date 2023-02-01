/*
1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của
thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1
mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào
'Thiago', 'Coutinho' và 'Perisic'
5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là
'team1', 'draw' và 'team2')
6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà
không sử dụng if/else hoặc toán tử 3 ngôi.
LAB	1
LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 2
Dữ liệu test: Sử dụng players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Sau
đó chạy hàm từ game.scored

*/
const game ={
    team1: 'Viet Nam',
    team2: 'Bayern Munich',

    players :[
        [
            'Dang Van Lam',
            'Bui Manh Cuong',
            'Dang Van Hau',
            'Le Sy Hai',
            'Nguyen Quang Hai',
            'Que Ngoc Hai',
            'Nguyen Van Toan',
            'Nguyen Cong Phuong',
            'Bui Hoang Viet Anh',
            'Doan Van Hau',
            'Nham Manh Dung'

        ],
        [
            'Neuer',
            'pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goetka',
            'coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
    ],
    score:'4.0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Humels'],
    date:'January 1st, 2023',
    odds:{// tỉ lệ cược
        team1:1.33,
        x:3.25,
        team2:6.5,
    },
};
//1.
console.log('===========1===============');

const[players1,players2]= game.players;
console.log(players1,players2);

//2.
console.log('===========2================');

const [gk,...fieldPlayers] = players1;
console.log(gk,fieldPlayers);

//3.
console.log('===========3================');

const allPlayers = [...players1,...players2];
console.log(allPlayers);
//4.
console.log('===========4================');
const players1Final =[...players1,'Bui Tien Dung','Do Hung Dung','Nguyen Hoang Duc' ]
console.log(players1Final);
//5.
console.log('===========5================');

const {odds:{team1,x:draw,team2}}= game;
console.log(team1,draw,team2);

//6.
console.log('===========6================');
const printGoals =function(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}
// printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);


//7.
console.log('===========7================');
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

