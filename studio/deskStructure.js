import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Site Settings').child(S.documentTypeList('siteConfig')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !['siteConfig'].includes(item.getId())),
    ])
