<template>
	<v-container>
		<article>
			<h1 class="text-center">Welcome to Underground</h1>
			<section>
				<h2>よおこそ</h2>
				<p>
					田舎出身の<s>変態</s>プログラマのポートフォリオのような何かです。<br>
					<b>※年末にはまともな運用を行います</b>
				</p>
				<p>
					なお、本サイトではダークテーマがサポート<s>されます</s>が、<b>制作者は瞳孔が開きすぎて逆にダークテーマを見られないのでテストしていません。</b><br>
					<s>切り替えは上部バーの右端からどうぞ。</s><br>
					まだ実装していないので、ご期待ください。
				</p>
			</section>
			<hr>
			<section>
				<h2>プロフィール</h2>
				<v-container>
					<v-data-table :items="profileItems"></v-data-table>
				</v-container>
			</section>
			<section>
				<h2>成果物</h2>
				<v-container>
					<small>Coming Soon...</small>
				</v-container>
			</section>
		</article>
	</v-container>
</template>

<script setup lang="ts">
const profileItems = [
	{
		type: "Name",
		value: "T. Matz",
		note: "Matzの由来は某Rubyの開発者(名字が同じ)"
	},
	{
		type: "Birthdate",
		value: "2004/07/28 (JST)",
		note: ""
	},
	{
		type: "Gender",
		value: "Male",
		note: ""
	},
	{
		type: "Like Colors",
		value: "Red (#FF0000)",
		note: ""
	},
	{
		type: "Using Platforms",
		value: "Android, iOS, iPadOS, Linux, macOS(M1), Windows",
		note: ""
	},
	{
		type: "Game Machines",
		value: "Nintendo Switch, Xbox Series S",
		note: "古い世代も結構ある"
	},
	{
		type: "Like Languages",
		value: "Java, C#, PHP, TypeScript",
		note: "触れるものならほぼすべて"
	},
	{
		type: "Like Frameworks",
		value: "Jakarta EE Servlet, Nuxt, ASP.Net Core",
		note: ""
	},
]
useServerHead({
	title: "Top Page"
})
</script>
