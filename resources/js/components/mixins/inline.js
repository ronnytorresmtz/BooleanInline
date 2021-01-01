export default {
    computed: {
        displayValue() {
            return this.value ? (this.field.trueText ? this.field.trueText :  this.__('Yes')) : (this.field.falseText ? this.field.falseText :  this.__('Yes'));
        }
    },

    methods: {
        async submit() {

            let value = this.value ? 1 : 0;

            let formData = new FormData();
            this.$parent.resource.fields.forEach(function(field) {
                formData.append(field.attribute, field.value);
            });
            formData.append(this.field.attribute, value);
            formData.append('_method', 'PUT');
                        

            return Nova.request().post(`/nova-api/${this.resourceName}/${this.resourceId}`, formData)
                .then(() => {
                    let message = this.value ? this.field.enableMessage : this.field.disableMessage;
                    this.$toasted.show(message, {type: 'success'});
                }, (response) => {
                    this.$toasted.show(response, { type: 'error' });
                })
        }
    }
}
