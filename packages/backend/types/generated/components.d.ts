import type { Schema, Struct } from '@strapi/strapi';

export interface CardsCategory extends Struct.ComponentSchema {
  collectionName: 'components_cards_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CardsDatabase extends Struct.ComponentSchema {
  collectionName: 'components_cards_databases';
  info: {
    displayName: 'Database';
  };
  attributes: {
    creation_year: Schema.Attribute.Integer;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.JSON;
    official_docs: Schema.Attribute.String;
    title: Schema.Attribute.String;
    use_cases: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.category': CardsCategory;
      'cards.database': CardsDatabase;
    }
  }
}
