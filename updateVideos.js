const fs = require('fs');
const path = require('path');

const ocrText = `1 no video
2 https://youtu.be/DqKIVmu6grM?si=Y8CTIl-OdUgotVHz
3 https://youtu.be/hNjiX-OKiWQ?si=c29Abf1Mzmj_1o9O
4 https://youtube.com/shorts/sLCxyD7xMFE?si=p_mgv6d-C-eOU1BZ
5 https://youtube.com/shorts/1SOtLlpKD8w?si=t_WslJUxhFHD01Ia
6 no video
7 no video
8 no video
9 no video
10 no video
11 https://youtu.be/La9IyRWrRVk?si=JsjNBqogh6-zoPf_
12 https://youtu.be/xDxFIISCNpY?si=TndNCEBMch8Yh2zu
13 no video
14 no video
15 no video
16 no video
17 no video
18 https://youtu.be/u0BgA1tVPaM?si=YTb218MCXb_ENlPw
19 no video
20 https://youtu.be/qOYXklWjuXA?si=dj3bgeUXB6YE54vY
21 no video
22 no video
23 https://youtu.be/uthjpYKD7Ng?si=Jdqa6vCIriEsFfn6
24 no video
25 no video
26 no video
27 no video
28 no video
29 no video
30 no video
31 no video
32 no video
33 https://youtu.be/tlYzrUKJDcQ?si=qBGbkQUeIS9evBBs
34 https://youtu.be/FLhddKA1lfQ?si=Ahx17N03oTVNbFIZ
35 https://youtu.be/Iy6oIm0eX2M?si=AMIUHxLialUL1iTR
36 https://youtu.be/CeJULC9fSMA?si=Z8igjZM-wZXfhXKb
37 no video
38 no video
39 no video
40 no video
41 no video
42 no video
43 no video
44 no video
45 no video
46 https://youtu.be/RIGOU5KUxf0?si=slRHnY4AWYl9XP_Y
47 no video
48 no video
49 https://youtu.be/rYj5QTBjeK4?si=BNE_axrKf1bfkXki
50 no video
51 https://youtu.be/3pIqbjv1MTQ?si=MXoLq85LBd6qs5aS
52 no video
53 no video
54 no video
55 no video
56 no video
57 no video
58 no video
59 no video
60 no video
61 https://youtu.be/inpvNt6591E?si=0qdBEx4b_nPgr3Zg
62 https://youtu.be/bedg1qp-F4M?si=x2VlHRMLvI45dP-5
63 no video
64 no video
65 no video
66 https://youtu.be/_HZ-EQ8Hc8E?si=6Zm3BXEz3G2gsV-h
67 https://youtu.be/TmJJfLlZgaQ?si=iETr95xMaQ0AvEfl
68 no video
69 https://youtu.be/tYinqtVDNcA?si=xXu7w7xCLmbsTICi
70 https://youtu.be/6uNezbvSRYQ?si=61qALbiwWP0tm_2v
71 no video
72 no video
73 no video
74 https://youtu.be/tLZzXtnrZuc?si=AZ7OWzRx3qQBUP2Y
75 https://youtu.be/P0USmxLAHtA?si=F-dlUtvfmrT40zXH
76 no video
77 https://youtu.be/6JpJv1AK8kg?si=wkzpdSdxGGzmQaPc
78 https://youtu.be/cPeUJt_Imz8?si=bw2dGLOSjoD7QCKM
79 https://youtu.be/DAiZnEel7cI?si=Twvusgmj5KXyc4RM
80 no video
81 no video
82 no video
83 no video
84 no video
85 no video
86 no video
87 no video
88 no video
89 no video
90 no video`;

const updates = {};
ocrText.split('\n').forEach(line => {
  if (!line.trim()) return;
  const parts = line.trim().split(' ');
  const num = parseInt(parts[0], 10);
  const url = parts[1];
  if (url && url !== 'no' && url.includes('http')) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
    if (match && match[1]) {
      updates[num] = match[1];
    }
  } else if (url === 'no') {
    updates[num] = ''; 
  }
});

const dataPath = path.join(process.cwd(), 'src', 'data', 'curriculumData.js');
let content = fs.readFileSync(dataPath, 'utf8');

for (let num = 1; num <= 90; num++) {
  const replacement = updates[num] !== undefined ? updates[num] : '';
  const regex = new RegExp(\`(num:\\s*\${num},[\\s\\S]*?youtubeId:\\s*['"])(.*?)(['"])\`, 'g');
  content = content.replace(regex, (match, p1, p2, p3) => {
    return p1 + replacement + p3;
  });
}

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Successfully updated curriculumData.js with new video IDs.');
