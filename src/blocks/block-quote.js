/*
  Block Quote
*/

SirTrevor.BlockTypes.BlockQuote = new SirTrevor.BlockType({ 
  title: "Quote",
  className: "block-quote",
  toolbarEnabled: true,
  dropEnabled: false,
  limit: 0,
  
  editorHTML: function() {
    return _.template('<blockquote class="text-block <%= className %>" contenteditable="true"></blockquote><div class="input text"><label>Credit</label><input data-maxlength="140" name="cite" class="input-string" type="text" /></div>', this);
  },
  
  loadData: function(block, data){
    block.$('.text-block').html(toHTML(data.text));
    block.$('input').val(data.cite);
  },
  
  toData: function(block){
    var bl = block.$el,
        dataStruct = bl.data('block'),
        content;
    
    /* Simple to start. Add conditions later */
    content = block.$('.text-block').html();
    dataStruct.data.text = convertToMarkdown(content, block.type);
    dataStruct.data.cite = block.$('input').val();
  }
});