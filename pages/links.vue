<template>
	<article>
		<h1>Links</h1>
		<p>
			私関連のリンク集です。
		</p>
		<section>
			<h2>Social Networks</h2>
			<section>
				<h3>Non-Fediverse</h3>
				<v-list>
					<v-list-item link href="https://x.com/Maria_Kamikawa" title="X (Hobby)" subtitle="@Maria_Kamikawa"/>
					<v-list-item link href="https://x.com/Hinata_Hojo" title="X (Technology)" subtitle="@Hinata_Hojo"/>
					<v-list-item link href="https://x.com/Shota_Sakitsu" title="X (Virtual Talent)" subtitle="@Shota_Sakitsu"/>
					<v-list-item link href="https://www.instagram.com/kori_syusetu.isnow/" title="Instagram (Main)" subtitle="@kori_syusetu.isnow"/>
					<v-list-item link href="https://www.instagram.com/shota.sakitsu/" title="Instagram (Virtual Talent)" subtitle="@shota.sakitsu"/>
					<v-list-item link href="https://www.youtube.com/@Kori16Syusetu" title="YouTube (Main)" subtitle="@Kori16Syusetu"/>
					<v-list-item link href="https://www.youtube.com/@Shota-Sakitsu" title="YouTube (Virtual Talent)" subtitle="@Shota-Sakitsu"/>
				</v-list>
			</section>
			<section>
				<h3>Fediverse</h3>
				<section>
					<h4>ActivityPub</h4>
					<v-list>
						<v-list-item link href="https://misskey.afy.jp/@Kori16Syusetu" title="IcyMisskey" subtitle="@Kori16Syusetu@misskey.afy.jp"/>
						<v-list-item link href="https://misskey.io/@Kori16Syusetu" title="Misskey.io" subtitle="@Kori16Syusetu@Misskey.io"/>
						<v-list-item link href="https://vtdon.com/@shota_sakitsu" title="VTdon (Virtual Talent)" subtitle="@shota_sakitsu@vtdon.com"/>
						<v-list-item link href="https://www.threads.net/@kori_syusetu.isnow" title="Threads (Main)" subtitle="@kori_syusetu.isnow@threads.net"/>
						<v-list-item link href="https://www.threads.net/@shota.sakitsu" title="Threads (Virtual Talent)" subtitle="@shota.sakitsu@threads.net"/>
					</v-list>
				</section>
			</section>
		</section>
		<section>
			<h2>Source Code</h2>
			<v-list>
				<v-list-item link href="https://git.isnow.jp/kori-syusetu/t-matz-portfolio" title="IcyGitLab"/>
				<v-list-item link href="https://github.com/Kori-Syusetu/T-Matz-Portfolio" title="GitHub (Mirror)"/>
			</v-list>
		</section>
	</article>
</template>

<script setup lang="ts">
useServerHead({
	title: "Links"
})
</script>
