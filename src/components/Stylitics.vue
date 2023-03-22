<script>
export default {
    mounted() {
        const fn = this.setupStylitics;
        // fetch on init
        window.document.getElementById("stylitics-classic-script").addEventListener('load', () => {
            fn()
        });
    },
    methods: {
        async setupStylitics() {
            const widgetContainer = document.getElementById('stylitics-widget-container');
            const widgetInstance = new window.StyliticsClassicWidget(
                // username will be used when we no longer need the demo account
                'express',
                widgetContainer,
                {
                    api: {
                        tags: 'new_arrival_demo_gallery',
                        min: 3,
                        max: 6,
                    },
                },
            );

            widgetInstance.start();

        },
    }

}

</script>

<template>
    <component :is="'script'" id="stylitics-classic-script"
        src="https://web-assets.stylitics.com/v3-classic/staging/classic.release.js" async defer></component>
</template>