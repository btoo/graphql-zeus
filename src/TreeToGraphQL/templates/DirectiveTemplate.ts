import { ParserField } from '../../Models';
import { TemplateUtils } from './TemplateUtils';

/**
 * Template for directives
 */
export class DirectiveTemplate {
  /**
   * Resolve directive field
   */
  static resolve(f: ParserField) {
    let argsString = '';
    if (f.args && f.args.length) {
      argsString = `(\n${f.args
        .map(TemplateUtils.resolverForConnection)
        .map((a) => `\t${a}`)
        .join('\n')}\n)`;
    }
    return `${TemplateUtils.descriptionResolver(f.description)}@${f.type.name}${argsString}`;
  }
}
