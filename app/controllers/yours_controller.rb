class YoursController < ApplicationController
  def index
  end

  private

  def get_contents
    {
      outer_links: [
        {
          name: 'Qiitaページ',
          text: 'Qiita',
          url: 'https://qiita.com/t0yohei/items/cd11b15642fbb26f71e2'
        },
        {
          name: 'ソースコード',
          text: 'GitHub',
          url: 'https://github.com/t0yohei/rails-vue3-app'
        }
      ],
      inner_links: [{
        label: '整数リテラル分類表',
        url: url_for(action: 'index', controller: 'yours')
      }]
    }
  end
end
